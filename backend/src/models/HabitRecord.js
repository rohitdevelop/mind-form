const mongoose = require("mongoose");

const HabitRecordSchema = new mongoose.Schema({
  habit: { type: mongoose.Schema.Types.ObjectId, ref: "Habit" },
  date: Date,
  completed: Boolean,
});

module.exports = mongoose.model("HabitRecord", HabitRecordSchema);
