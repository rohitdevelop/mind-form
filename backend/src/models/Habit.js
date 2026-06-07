const mongoose = require("mongoose");

const HabitSchema = new mongoose.Schema({
  name: String,
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  streak: { type: Number, default: 0 },
});

module.exports = mongoose.model("Habit", HabitSchema);
