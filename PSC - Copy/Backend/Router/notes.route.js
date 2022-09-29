const { Router } = require("express");
const NotesRouter = Router();
require("dotenv").config();
const { notesModels } = require("../Models/notes.Model");

NotesRouter.get("/", async (req, res) => {
  const id = req.body.userid;
  const note = await notesModels.find({ userid: id });
  console.log(note);
  res.json(note);
});

NotesRouter.post("/create", async (req, res) => {
  const { Note, Heading, Tag, userid } = req.body;

  const note = new notesModels({
    Heading,
    Note,
    Tag,
    userid,
  });

  try {
    await note.save();
    res.send("note created");
  } catch (error) {
    console.log(error);
    res.send("error");
  }
});
NotesRouter.delete("/delete/:noteid", async (req, res) => {
  const { noteid } = req.params;

  const deletenote = await notesModels.findOneAndDelete({
    _id: noteid,
    userid: req.body.userid,
  });
  if (deletenote) {
    res.send("Notes Deleted Sucessfully ");
  } else {
    res.send("something went wrong");
  }
});

NotesRouter.patch("/edit/:noteid", async (req, res) => {
  const { noteid } = req.params;

  const update = await notesModels.findOneAndUpdate(
    {
      _id: noteid,
      userid: req.body.userid,
    },
    { ...req.body }
  );
  if (update) {
    res.send("Notes updated Sucessfully ");
  } else {
    res.send("something went wrong");
  }
});
module.exports = {
  NotesRouter,
};
