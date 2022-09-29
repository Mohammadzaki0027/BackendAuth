const express = require("express");
const app = express();
app.use(express.json());
const mongoose = require("mongoose");
const cors = require('cors')
app.use(cors())
const { connection } = require("./config/db");
const { authentication } = require("./Middleware/Authentication");
const { NotesRouter } = require("./Router/notes.route");
const { UserRouter } = require("./Router/userController");
app.use("/user", UserRouter);
app.use(authentication);
app.use("/notes", NotesRouter);

app.listen(8080, async () => {
  try {
    await connection;
    console.log("connected to cloud");
  } catch (err) {
    console.log("Some Error...", err);
  }
});
