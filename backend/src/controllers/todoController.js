const Todo = require("../models/todo");

exports.createTodo = async (req, res) => {
  try {
    const { title, message } = req.body;

    const newTodo = await Todo.create({
      title,
      message,
      userId: req.user.id,
    });

    res.status(201).json({
      success: true,
      message: "Todo Created",
      todo: newTodo,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};


exports.getMyTodos = async (req, res) => {
  try {
    const todos = await Todo.find({
      userId: req.user.id,
    });

    res.status(200).json({
      success: true,
      todos,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};