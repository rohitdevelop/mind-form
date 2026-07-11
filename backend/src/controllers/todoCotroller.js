const todo = require('../models/todoModel');

exports.createTodo = async (req, res) => {
    try {
        const { title, userId } = req.body; 
        

        const newTodo = await todo.create({
            title,
            userId
        });

        res.status(201).json({ message: 'Todo created successfully', todo: newTodo });
        
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};