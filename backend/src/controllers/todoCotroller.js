const todo = require('../models/todo');

exports.createTodo = async (req, res) => {
    try {
        const { title, message } = req.body; 
        

        const newTodo = await todo.create({
            title,
            message
        });

        res.status(201).json({ message: 'Todo created successfully', todo: newTodo });
        
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};