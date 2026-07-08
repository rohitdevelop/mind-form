const usermodel = require('../models/userModel');


exports.createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const newUser = new UserModel({ name, email, password });
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create user' });
  } 
}