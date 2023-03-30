var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index");
});

router.get("/products", async function (req, res, next) {
  try {
    throw Error("Error for /products");
  } catch (err) {
    next(err);
  }
});

module.exports = router;
