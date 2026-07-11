const mongoose = require('mongoose');


const todoSchema =  new mongoose.Schema({
    titile:{
        type:String,

    },
    userId:{
    type:mongoose.Schema.Types.ObjectId,
    }
})

const Todo = mongoose.model("Todo", todoSchema);
module.exports = Todo;