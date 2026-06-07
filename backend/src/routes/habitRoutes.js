const express = require("express");
const router = express.Router();
const controller = require("../controllers/habitController");

router.get("/", controller.listHabits);
router.post("/", controller.createHabit);

module.exports = router;
