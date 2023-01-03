const express = require("express");
const router = express.Router();

const GamesModel = require("./utils/database/models/GamesModel");

router.get("/games", (req, res) => {
  GamesModel.findAll()
    .then((games) => {
      res.send(games).statusCode(200);
    })
    .catch((err) =>
      res.send({
        error: true,
        err
      })
    );
});

router.get("/game/:id", (req, res) => {
  if (isNaN(req.params.id)) {
    res.sendStatus(400);
  } else {
    const id = parseInt(req.params.id);
    GamesModel.findOne({
      where: {
        id
      }
    })
      .then((game) => {
        if (game.id != undefined) res.sendStatus(200);
      })
      .catch((error) => {
        res.sendStatus(404);
      });
  }
});

module.exports = router;
