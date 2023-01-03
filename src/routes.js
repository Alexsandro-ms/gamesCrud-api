const express = require("express");
const router = express.Router();

const GamesModel = require("./utils/database/models/GamesModel");

router.get("/games", (req, res) => {
  GamesModel.findAll()
    .then((games) => {
      res.send(games).statusCode(200);
    })
    .catch((error) => console.log(error));
});

module.exports = router;
