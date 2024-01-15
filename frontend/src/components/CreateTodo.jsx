import axios from "axios";
import { useState } from "react"

export function CreateTodo({ todoList, updateTodos}){

    const [title, setTitle] = useState('');
    const [ description, setDescription ] = useState('')

    function addNewTodo(){
        console.log("todolist: ",todoList)
        axios.post("http://localhost:3000" + "/todo",{
            title: title,
            description: description
        }).then(()=>{
            updateTodos([...todoList, {
                title: title,
                description: description
            }])
            setTitle('');
            setDescription('');
        })
    }

    return (
        <div>
            <input type="text" name="title" placeholder="title" onChange={(event)=>{ setTitle(event.target.value)}} /> <br /><br />
            <input type="text" name="Description" placeholder="decription" id="" onChange={(event) => {setDescription(event.target.value)}} /> <br />
            <br />
            <button onClick={addNewTodo}>Add a todo</button>
        </div>
    )
}