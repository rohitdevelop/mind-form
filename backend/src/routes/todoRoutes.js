const express = require("express");
const router = express.Router();

const todoController = require("../controllers/todoController");
const { auth } = require("../middleware/authMiddleware");

router.post("/create", auth, todoController.createTodo);
router.get("/mytodos", auth, todoController.getMyTodos);
module.exports = router;