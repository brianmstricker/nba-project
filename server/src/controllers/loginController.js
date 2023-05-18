const { UserModel } = require("../models/UserModel");
const jwt = require("jsonwebtoken");
exports.loginController = async (req, res) => {
  const userInDb = await UserModel.findOne({
    username: req.body.username,
    password: req.body.password,
  });
  if (userInDb) {
    const userObj = userInDb.toObject();
    delete userObj.password;
    const token = jwt.sign(userObj, "secret");
    res.json({ token, user: userObj });
  } else {
    res.status(401).json({ message: "Invalid Login" });
  }
};
