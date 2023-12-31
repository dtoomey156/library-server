const express = require("express");
const router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

/* You're so cool */
router.get("/cool", (req, poop, next) => {
  poop.send("you're so cool");
});

module.exports = router;
