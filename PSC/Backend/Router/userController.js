const { Router } = require("express");
const UserRouter = Router();

const bcrypt = require("bcrypt");
const { UsersModels } = require("../Models/UserModel");
const jwt = require("jsonwebtoken");
require("dotenv").config();

UserRouter.post("/signup", async (req, res) => {
  const { password, email, age, name } = req.body;
  const results = await UsersModels.find({ email });
  if (results.length) {
    res.send("user already presents");
  } else {
    bcrypt.hash(password, 6, async function (err, hash) {
      try {
        const users = new UsersModels({ age, email, password:hash, name });

        await users.save();
        res.send("created");
      } catch (err) {
        res.send("bad", err);
      }
    });
  }
});

UserRouter.post("/login", async (req, res) => {
  const { password, email } = req.body;
  const user = await UsersModels.findOne({ email });
  if (!user) {
    res.send("Something Went Wrong");
    return;
  }
  const hash = user.password;
  bcrypt.compare(password, hash, function (err, result) {
    if (result) {
      let token = jwt.sign({ userid: user.id }, process.env.secretKey);
      res.send({ msg: "login sucessfull", token: token, userid: user.id });
    } else {
      res.send("failed");
    }
  });
});

module.exports = {
  UserRouter,
};
