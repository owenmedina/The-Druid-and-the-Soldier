require("dotenv").config();

const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/public`));

const port = parseInt(process.env.APP_PORT_NUMBER);

app.get("/", function (req, res) {
  console.log("At /");
  res.sendFile(`${__dirname}/views/index.html`);
});

app.listen(port, function () {
  console.log(
    `Successfully setup server on port ${process.env.APP_PORT_NUMBER}`
  );
});
