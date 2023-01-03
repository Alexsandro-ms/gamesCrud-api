const express = require("express");
const router = express.Router();

const GamesModel = require("./utils/database/models/GamesModel");

router.get("/", (req, res) => {
  res.send("<h1>Games</h1>");
});

module.exports = router;
