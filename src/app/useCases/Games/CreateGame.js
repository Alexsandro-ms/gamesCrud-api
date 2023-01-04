const GamesModel = require("../../models/GamesModel");

const CreateGame = (req, res) => {
  const { title, year, price } = req.body;
  GamesModel.create({
    title,
    year,
    price
  })
    .then((game) => {
      res.sendStatus(201);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = CreateGame;
