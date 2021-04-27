
const mongoose = require('mongoose');
const schema = new mongoose.Schema({
    taskName : {
        type:String,
        required:true
    },

    priority :{
        type:String,
        required:true
    }
} , {timestamps: true }
);
const Task = mongoose.model('Tasks',schema,'Tasks');
module.exports =Task;