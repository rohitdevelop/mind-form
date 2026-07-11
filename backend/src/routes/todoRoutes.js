const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoCotroller');

router.post('/create', todoController.createTodo);

module.exports = router;