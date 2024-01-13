import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { CreateTodo
 } from './components/CreateTodo';
 import { Todos } from './components/todos';
import './App.css'

function App() {

  return (
    <>
      <div>
        <CreateTodo />
        <Todos todoList={
        }/>
        </div>
    </>
  )
}

export default App
