const { SignupModel } = require("../Models/AuthModels");

const authorization = (roles) => {
  return async (req, res, next) => {
    const { email } = req.body;

    const user = await SignupModel.findOne({ email });
    if (roles.includes(user.role)) {
      next();
      res.send("not authenticated");
    } else {
      res.send("not authenticated");
    }
  };
};
module.exports = {
  authorization,
};
