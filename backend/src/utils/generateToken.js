const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config/env");

exports.generate = (payload, expiresIn = "1h") =>
  jwt.sign(payload, JWT_SECRET, { expiresIn });
