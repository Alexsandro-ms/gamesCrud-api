const GamesModel = require("../../models/GamesModel");

const EditGame = (req, res) => {
  if (isNaN(req.params.id)) {
    return res.sendStatus(404);
  } else {
    const id = parseInt(req.params.id);
    const { title, year, price } = req.body;

    try {
      GamesModel.findByPk(id).then((game) => {
        if (title != undefined || year != undefined || price != undefined) {
          game.title = title;
          game.year = year;
          game.price = price;

          GamesModel.update(
            {
              title,
              year,
              price
            },
            {
              where: { id }
            }
          )
            .then(() => {
              return res.status(200).json({ error: false });
            })
            .catch((err) => {
              return res.status(400).json({ error: true, details: err });
            });
        }
      });
    } catch (err) {
      return res.sendStatus(404);
    }
  }
};

module.exports = EditGame;
