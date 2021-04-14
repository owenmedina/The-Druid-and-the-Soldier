"use strict";

import env from "dotenv";
env.config();
import { fileURLToPath } from "url";
import path, { dirname } from "path";
import express from "express";
import ejs from "ejs";
import liveReload from "livereload"; // Reloading browser when public/ files change
import connectLiveReload from "connect-livereload"; // Appends script on alll the rendered/sent files through the server's response object
import GameBrain from "./public/js/game-brain.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const gb = new GameBrain();
let level = gb.levels[gb.currentLevel];

const publicDirectory = path.join(__dirname, "public");
const nodeModulesDirectory = path.join(__dirname, "node_modules");

const liveReloadServer = liveReload.createServer(); // Creates a server that listens for changes
liveReloadServer.watch(publicDirectory); // Watches changes in the public folder
// nodemon kills connection of live reload server as well every time the backend changes
// reloads the page once the connection is established again on the live reload server and after the handshake of the live reload server (100ms timeout)
liveReloadServer.server.once("connection", function () {
  setTimeout(function () {
    liveReloadServer.refresh("/"); // refreshes the page
  }, 100);
});

const app = express();
app.use(connectLiveReload()); // tells express to use the module (line must be before static and dynamic routes)
app.use(express.static(publicDirectory)); // static route for public files
app.use("/scripts", express.static(nodeModulesDirectory)); // static route for node modules
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const port = parseInt(process.env.APP_PORT_NUMBER);

/////////////////// GET REQUESTS ///////////////////
app.get("/", function (req, res) {
  console.log("At the /");
  res.render("index", level);
});

/////////////////// POST REQUESTS ///////////////////
app.post("/action", function (req, res) {
  console.log("req.body", req.body);
  const level = req.body;
  const fileName = path.join(
    __dirname,
    `views/${
      level.type === "level"
        ? "/partials/levels/level.ejs"
        : `/partials/${level.type === "win" ? "win.ejs" : "game-over.ejs"}`
    }`
  );
  ejs.renderFile(fileName, level, {}, function (err, htmlString) {
    console.log("err", err);
    res.send(htmlString);
    // console.log("htmlString", htmlString);
  });
});

app.listen(port, function () {
  console.log(
    `Successfully setup server on port ${process.env.APP_PORT_NUMBER}`
  );
});

// Describe 500 errors in more detail
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  console.error(err);
  res.status(err.status || 500);
  res.render("error", {
    message: err.message,
    error: err,
  });
});
