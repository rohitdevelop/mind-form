const express = require("express");
 const authRouter = require("./routes/userRoutes");
const todoRouter = require("./routes/todoRoutes");
const cookie = require("cookie-parser")

const app = express();
 app.use(express.json());
 app.use(cookie())
 app.use('/api', authRouter);
 app.use('/api', todoRouter);
 
module.exports = app;
 
