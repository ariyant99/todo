import { CreateTodo
 } from './components/CreateTodo';
import './App.css'
import { useEffect, useState } from 'react';
import { Todos } from './components/Todos';
import axios from 'axios';

function App() {

  const [todos, setTodos] = useState([
    {
      title: "hello",
      description: "lol"
    }
  ])
  useEffect(() =>{
    axios.get("http://localhost:3000/todos").then((data)=>{
      console.log("data is: ", data)
      setTodos(data.data);
    })
  },[])
  return (
    <>
      <div>
        <CreateTodo todoList={ todos } updateTodos = { setTodos }/>
        <Todos todoList={todos}></Todos>
        </div>
    </>
  )
}

export default App
