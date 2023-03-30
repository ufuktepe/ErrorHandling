//app.js

const express = require("express");
const path = require("path");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const productsRouter = require("./routes/products");

const { logger, responder, catchAllHandler } = require("./error-handlers");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

// Routes
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/products", productsRouter);

// Error handlers
app.use(logger);
app.use(responder);
app.use(catchAllHandler);

module.exports = app;
