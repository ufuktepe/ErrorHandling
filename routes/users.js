// users.js

const express = require("express");
const router = express.Router();
const { UserIdError } = require("../errors");

/* GET user listing. */
router.get("/:userId", function (req, res, next) {
  // Throw error
  try {
    throw new UserIdError(req.params.userId);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
