const { PlayerModel } = require("../models/PlayerModel");

exports.getPlayersController = async (req, res) => {
  const players = await PlayerModel.find();
  res.json(players);
};
