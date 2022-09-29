const express = require("express");
const app = express();

const multer = require("multer");
const path = require("path");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./images");
  },

  filename: (req, file, cb) => {
    cb(null, Date.now() + "-----" + file.originalname);
  },
});
const upload = multer({ storage: storage });

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./files/index.html"));
});

app.post("/upload", upload.single("image"), (req, res) => {
  console.log(req.file);
  res.send("image Upload");
});
app.listen(8080, () => {
  console.log("Sucessfully Connected");
});
