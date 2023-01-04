const express = require("express");
const connetion = require("./src/utils/database/dbConnetion");
const bodyParser = require("body-parser");
const router = require("./src/routes");
const cors = require("cors");
require("dotenv").config();

connetion
  .authenticate()
  .then(() => {
    const app = express();
    const PORT = process.env.PORT || 8080;

    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    app.use(router);
    app.use(cors());

    app.listen(
      PORT,
      console.log(`Server running on the https://localhost/${PORT}`)
    );
    return console.log("Database Connected");
  })
  .catch((error) => console.log(error));
