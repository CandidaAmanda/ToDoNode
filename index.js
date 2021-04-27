
const express = require('express');
const mongoose = require('mongoose');
const Task = require('./Models/tasks-model');

const taskModel = require('./Models/tasks-model');
const app = express();

const dbURI ='mongodb+srv://root:root@candidamongo1.ibu8w.mongodb.net/ToDo?retryWrites=true&w=majority';

mongoose.connect(dbURI,{useNewUrlParser:true, useUnifiedTopology:true})
.then (()=>{
    console.log('Connected to DB');
    app.listen(3000, ()=>{ console.log ('App is listening')});
}).catch((err)=>{
    console.log (err);
})

app.get('/task',auth, async (req,res)=>{

    console.log('Hello');
    const result = await Task.find();
    res.send (result);
})

function auth (req,res,next){
console.log ('Authenticated');
next();

}

app.post('/task',async (req,res)=>{
    const result = await Task.create({
        taskName: 'Pray',
        priority: 'High'
    })
    
    res.send (result);
})




