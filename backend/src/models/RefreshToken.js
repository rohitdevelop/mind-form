const mongoose = require("mongoose");

const RefreshTokenSchema = new mongoose.Schema({
  token: String,
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  expiresAt: Date,
});

module.exports = mongoose.model("RefreshToken", RefreshTokenSchema);
