const express = require("express");
const app = express();
app.use(express.json());
const morgan = require("morgan")
app.use(morgan('combined'))
const validator = (req, res, next) => {
  if (req.method === "POST") {
    const payload = req.body;
    const { ID, Name, Rating, Description, Genre, Cast } = payload;
    if (
      payload.ID &&
      payload.Name &&
      payload.Rating &&
      payload.Description &&
      payload.Genre &&
      payload.Cast
    ) {
      if (
        typeof ID === "number" &&
        typeof Name === "string" &&
        typeof Rating === "number" &&
        typeof Description === "string" &&
        typeof Genre === "string" &&
        typeof Cast === "string"
      ) {
        next();
      } else {
        res.send("incorrectdata");
      }
    } else {
      res.send("incorrectdata");
    }

    next();
  }
};

app.post("/movies", validator, (req, res) => {
  res.send("data added");
});

app.get("/",(req, res) => {
  res.send("welcome to homepage");
});
app.listen(8080);
