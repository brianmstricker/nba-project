const { UserModel } = require("../models/UserModel");
exports.registerController = async (req, res) => {
  const instance = new UserModel(req.body);
  await instance.save();
  res.json(instance);
};
