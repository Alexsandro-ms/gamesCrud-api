const express = require("express");
const router = express.Router();

const GamesModel = require("./app/models/GamesModel");

const ListGames = require("./app/useCases/Games/ListGames");
const ListGameById = require("./app/useCases/Games/ListGameById");
const CreateGame = require("./app/useCases/Games/CreateGame");
const DeleteGame = require("./app/useCases/Games/DeleteGame");

router.get("/games", ListGames);

router.get("/game/:id", ListGameById);

router.post("/game", CreateGame);

router.delete("/game/:id", DeleteGame);

router.put("/game/:id", (req, res) => {
  if (isNaN(req.params.id)) {
    res.sendStatus(400);
  } else {
    const id = parseInt(req.params.id);
    const { title, year, price } = req.body;

    GamesModel.findByPk(id)
      .then((game) => {
        if (title != undefined) {
          game.title = title;
        }
        if (year != undefined) {
          game.year = year;
        }
        if (price != undefined) {
          game.price = price;
        }

        GamesModel.update(
          {
            title,
            year,
            price
          },
          {
            where: { id }
          }
        ).then(res.sendStatus(200));
      })
      .catch((err) => {
        res.sendStatus(400);
      });
  }
});

module.exports = router;
