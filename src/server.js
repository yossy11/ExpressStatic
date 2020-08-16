"use strict";
const express = require("express");
const PORT = 3000;

const app = express();

app.get("/", (req, res) => res.send("This server hosts static files"));

app.use(express.static("public"));

app.listen(PORT);
console.log(`Server running at ${PORT}`);
