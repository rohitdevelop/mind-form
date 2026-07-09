const express = require("express");
const authRouter = express.Router();
const controller = require("../controllers/userController");


authRouter.post("/signup", controller.signup);
authRouter.post("/login", controller.login);

module.exports = authRouter;
