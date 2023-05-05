const mongoose = require("mongoose");
const PlayerSchema = new mongoose.Schema({
  name: String,
  position: String,
  number: Number,
});
const PlayerModel = mongoose.model("Player", PlayerSchema);
exports.PlayerModel = PlayerModel;
