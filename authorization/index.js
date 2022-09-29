const express = require("express");
const app = express();
const bcrypt = require("bcrypt");
let jwt = require("jsonwebtoken");
const { SignupModel } = require("./Models/AuthModels");
const { connect } = require("./config/db");
const { authentication } = require("./Middleware/authentication");
const { authorization } = require("./Middleware/authorised");
app.use(express.json());
app.get("/", (req, res) => {
  res.send("welcome to Homepage");
});
app.post("/signup", async (req, res) => {
  const { Password, email, name, role } = req.body;
  bcrypt
    .hash(Password, 6)
    .then(async function (hash) {
      const user = new SignupModel({
        email: email,
        Password: hash,
        name: name,
        role,
      });
      await user.save();
      res.send("added sucessfully");
    })
    .catch((err) => {
      res.send("something is wrong");
    });
});
app.post("/login", async (req, res) => {
  let { email, Password } = req.body;
  const user = await SignupModel.findOne({ email });
  let hash = user.Password;
  bcrypt.compare(Password, hash, function (err, result) {
    if (result) {
      let token = jwt.sign({ email }, "secret");
      res.send({ msg: "login sucessfull", token: token });
    } else {
      res.send("failed");
    }
  });
});

//only admin seller
app.post(
  "/products/create",
  authentication,
  authorization(["seller", "admin"]),
  async (req, res) => {
    // Authentication and authorization
    res.send("created product");
  }
);
// for customers only
app.get(
  "/products",
  authentication,
  authorization(["customer"]),
  (req, res) => {
    // Authentication
    res.send("products page");
  }
);

app.get(
  "/products/info",
  authentication,
  authorization(["seller"]),
  (req, res) => {
    // Authentication
    res.send("products page");
  }
);
//only admin
app.delete(
  "/products/:productId",
  authentication,
  authorization(["admin"]),
  async (req, res) => {
    res.send("products page" + "  " + req.params.productId);
  }
);
app.listen(8080, async () => {
  try {
    await connect;
    console.log("connected to db");
  } catch (err) {
    console.log(err);
  }
});
