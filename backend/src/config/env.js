const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  PORT: process.env.PORT || 5000,
  MONGO_URI: process.env.MONGO_URI || "mongodb://localhost:27017/mindform",
  JWT_SECRET: process.env.JWT_SECRET || "replace-me",
};
