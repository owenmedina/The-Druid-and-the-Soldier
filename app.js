"use strict";

require("dotenv").config();

const path = require("path");
const express = require("express");
const liveReload = require("livereload"); // Reloading browser when public/ files change
const connectLiveReload = require("connect-livereload"); // Appends script on alll the rendered/sent files through the server's response object
const GameBrain = require(path.join(__dirname, "game-brain.js"));

const gb = new GameBrain();
let level = gb.levels[gb.currentLevel];

const publicDirectory = path.join(__dirname, "public");

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
app.use(express.static(publicDirectory));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

const port = parseInt(process.env.APP_PORT_NUMBER);

/////////////////// GET REQUESTS ///////////////////
app.get("/", function (req, res) {
  console.log("At the /");
  res.render("index", level);
});

/////////////////// POST REQUESTS ///////////////////
app.post("/action", function (req, res) {
  console.log(req.body);
  level = gb.progress(req.body.level, req.body.answer);
  res.redirect("/");
});

app.listen(port, function () {
  console.log(
    `Successfully setup server on port ${process.env.APP_PORT_NUMBER}`
  );
});
