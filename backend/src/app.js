const express = require("express");
const cors = require("cors");
const { connectDB } = require("./config/db");
const env = require("./config/env");

const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const habitRoutes = require("./routes/habitRoutes");
const analyticsRoutes = require("./routes/analyticsRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/habits", habitRoutes);
app.use("/api/analytics", analyticsRoutes);
app.use("/api/dashboard", dashboardRoutes);

module.exports = app;
const express = require("express");
const app = express();
// const userRouter = require("./router/user.router")
// const cookieParser = require("cookie-parser");

app.use(express.json());
// app.use(cookieParser())
// app.use('/api',userRouter)

module.exports = app;
