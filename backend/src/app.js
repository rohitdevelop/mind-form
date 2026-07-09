const express = require("express");
 const authRouter = require("./routes/userRoutes");

const app = express();
 app.use(express.json());
 app.use('/api', authRouter);
 
module.exports = app;
 
