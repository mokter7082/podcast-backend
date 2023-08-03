require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const createError = require("http-errors");
const userRouter = require("./router/user.route");
const cors = require('cors');

const app = express();
app.use(morgan());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API server working !");
});

app.use("/api/v1", userRouter);

module.exports = app;
