const GamesModel = require("../../models/GamesModel");

const CreateGame = (req, res) => {
  const { title, year, price } = req.body;
  if (title == "" || isNaN(year) || price == "") {
    return res
      .sendStatus(400)
      .json({ error: true, details: "Complete all the fields correctly" });
  } else {
    GamesModel.create({
      title,
      year,
      price
    })
      .then((game) => {
        return res.sendStatus(201);
      })
      .catch((err) => {
        return res.status(400).json({ error: true, details: err });
      });
  }
};

module.exports = CreateGame;
