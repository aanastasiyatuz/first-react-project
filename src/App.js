
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
      task: task,
      id: 1
    }
    newTodos.push(newObj)
    setTodos(newTodos)
  }

  function changeStatus(id){
    let newTodos = todos.map(item => {
      if(item.id === id){
        item.status = !item.status
      }
      return item
    })

    setTodos(newTodos)
  }

  function handleDelete(id){
    console.log(id)
  }

  return (
    <div className="app.js">
      <AddTodo 
        handleClick={handleClick}
        onChangeInput={onChangeInput}
      />
      <TodoList 
        todos={todos}
        changeStatus={changeStatus}
        handleDelete={handleDelete}
      />
    </div>
  )
}

export default App;
