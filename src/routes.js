const express = require("express");
const router = express.Router();

const GamesModel = require("./app/models/GamesModel");

const ListGames = require("./app/useCases/Games/ListGames");
const ListGameById = require("./app/useCases/Games/ListGameById");
const CreateGame = require("./app/useCases/Games/CreateGame");
const DeleteGame = require("./app/useCases/Games/DeleteGame");
const EditGame = require("./app/useCases/Games/EditGame");

router.get("/games", ListGames);

router.get("/game/:id", ListGameById);

router.post("/game", CreateGame);

router.delete("/game/:id", DeleteGame);

router.put("/game/:id", EditGame);

module.exports = router;
