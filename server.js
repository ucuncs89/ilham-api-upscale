/* eslint-disable no-undef */
require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 4000;
const cors = require("cors");
const helmet = require("helmet");
const router = require("./src/routes");
const morgan = require("morgan");
const fs = require("fs");
const allowCrossDomain = (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
};

app.use(allowCrossDomain);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(helmet());

app.use(
  morgan("combined", {
    stream: fs.createWriteStream(
      `./logs/${new Date().toISOString().split("T")[0]}.log`,
      { flags: "a" }
    ),
    skip: function (req, res) {
      return res.statusCode < 400;
    },
  })
);
app.use("", router);
app.use((err, req, res, next) => {
  if (err && err.error && err.error.isJoi) {
    // we had a joi error, let's return a custom 400 json response
    res.status(400).json({
      type: err.type, // will be "query" here, but could be "headers", "body", or "params"
      message: err.error.toString(),
    });
  } else {
    // pass on to another error handler
    next(err);
  }
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
