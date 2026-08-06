const mongoose = require('mongoose');


const todoSchema =  new mongoose.Schema({
    title:{
        type:String,
        
    },
    message:{
        type:String,
    },
    userId:{
    type:mongoose.Schema.Types.ObjectId,
    }
})

const Todo = mongoose.model("Todo", todoSchema);
module.exports = Todo;