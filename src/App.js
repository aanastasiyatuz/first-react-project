
import React, { useState } from 'react'
import AddTodo from './components/AddTodo/AddTodo'
import TodoList from './components/TodoList/TodoList'

function App() {

  let [task, setTask] = useState('');
  let [todos, setTodos] = useState([]);

  function onChangeInput(v){
    setTask(v)
  }

  function handleClick(){
    let newTodos = [...todos]
    let newObj = {
      task: task
    }
    newTodos.push(newObj)
    setTodos(newTodos)
  }

  return (
    <div className="app.js">
      <h1>Hello World</h1>
      <AddTodo 
        handleClick={handleClick}
        onChangeInput={onChangeInput}
      />
      <TodoList 
        randomValue="Kubat" 
        todos={todos}
      />
      <h2>Hello</h2>
    </div>
  )
}

export default App;
