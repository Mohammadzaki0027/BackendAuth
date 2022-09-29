const jwt=require("jsonwebtoken")
const authentication = (req, res, next) => {
    if (!req.headers.authorization) {
      return res.send("please login again");
    }
  
    const token = req.headers?.authorization?.split(" ")[1];
    jwt.verify(token, "secret", function (err, decoded) {
      if (err) {
        res.send("Please Login");
      } else {
        req.body.email = decoded.email;
        next();
      }
    });
  };

  module.exports={
    authentication
  }