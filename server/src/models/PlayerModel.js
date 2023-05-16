const mongoose = require("mongoose");
const PlayerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  position: String,
  number: Number,
});
const PlayerModel = mongoose.model("Player", PlayerSchema);
exports.PlayerModel = PlayerModel;
