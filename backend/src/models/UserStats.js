const mongoose = require("mongoose");

const UserStatsSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  streakLongest: Number,
  totalCompleted: Number,
});

module.exports = mongoose.model("UserStats", UserStatsSchema);
