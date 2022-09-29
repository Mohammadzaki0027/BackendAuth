const mongoose = require("mongoose");

const Modelschema = new mongoose.Schema({
  Note: { type: String, required: true },
  Heading: { type: String, required: true },
  Tag: { type: String, required: true },
  userid: { type: String, required: true },
});
const notesModels = mongoose.model("note", Modelschema);
module.exports = { notesModels };
