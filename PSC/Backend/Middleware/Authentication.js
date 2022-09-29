require("dotenv").config();
const jwt = require("jsonwebtoken");
const authentication = (req, res, next) => {
  if (!req.headers.authorization) {
    return res.send("please login again");
  }

  const token = req.headers?.authorization?.split(" ")[1];
  jwt.verify(token, process.env.secretKey, function (err, decoded) {
    if (err) {
      res.send("Please Login");
    } else {
      req.body.userid= decoded.userid;
      next();
    }
  });
};

module.exports = {
  authentication,
};
