const { PlayerModel } = require("../models/PlayerModel");

exports.createPlayerController = async (req, res) => {
  console.log(req.body);
  const instance = new PlayerModel(req.body);
  await instance.save();
  res.send(instance);
};
