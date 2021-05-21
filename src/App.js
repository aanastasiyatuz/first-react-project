
import React, { useState } from 'react'
import AddTodo from './components/AddTodo/AddTodo'
import TodoList from './components/TodoList/TodoList'

function App() {
  let [todos, setTodos] = useState([]);

  function handleTask(newObj){
    let newTodos = [...todos]

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

  return (
    <div className="App">
      <AddTodo 
        handleTask={handleTask}
      />
      <TodoList 
        todos={todos}
        changeStatus={changeStatus}
      />
    </div>
  )
}

export default App;
