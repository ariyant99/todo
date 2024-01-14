const express = require('express');
const { createTodo, updateTodo } = require('./type');
const { todo } = require('./db');
const cors = require("cors")

const app = express()



app.use(express.json())
app.use(cors())
app.post('/todo', async function(req,res){
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload)
    if(!parsedPayload){
        res.status(411).send({"msg": "invalid input"})
        return;
    }

    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed : false
    })

    res.json({
        msg: "added to todo"
    })
})

app.get('/todos',async function(req,res){
    const todoList = await todo.find({})
    res.json(todoList)
})


app.put('/completed',async function(req,res){
    const createPayload = req.body;
    const parsedPayload = updateTodo.safeParse(createPayload)
    if(!parsedPayload){
        res.status(411).send({"msg": "invalid input"})
        return;
    }
    await todo.update({
        _id: createPayload.id
    }, {
        completed : true
    })

    res.json({
        msg: "updated the status to completed"
    })
})

app.listen(3000, ()=>{
    console.log("app is runnig on port 3000")
})