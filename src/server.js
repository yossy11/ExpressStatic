"use strict";
const express = require("express");
const PORT = 3000;

const app = express();

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

app.get("/", (req, res) => res.send("This server hosts static files"));
app.use(express.static("public"));

app.listen(PORT);
console.log(`Server running at ${PORT}`);
