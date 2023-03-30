// products.js

const express = require("express");
const router = express.Router();
const { ProductIdError } = require("../errors");

/* GET product listing. */
router.get("/:productId", function (req, res, next) {
  // Throw error
  try {
    throw new ProductIdError(req.params.productId);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
