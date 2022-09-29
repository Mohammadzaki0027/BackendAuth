const mongoose = require("mongoose");

const Modelschema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  age: Number,
});
const UsersModels = mongoose.model("Pscuser", Modelschema);
module.exports={UsersModels}