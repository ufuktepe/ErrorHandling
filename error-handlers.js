// error-handler.js

// Log the error message
const logger = (err, req, res, next) => {
  console.log(`error ${err.message}`);
  next(err); // Call the next middleware
};

// Send a response to the client
const responder = (err, req, res, next) => {
  const status = err.status || 400;
  res.status(status).send(err.message);
};

// Catch-all error handler
const catchAllHandler = (req, res, next) => {
  res.status(404);
  res.send("invalid path");
};

module.exports = {
  logger,
  responder,
  catchAllHandler,
};
