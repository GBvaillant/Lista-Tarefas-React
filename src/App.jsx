import { useEffect, useState } from 'react'
import './App.css'

import Todo from './components/Todo'
import TodoForm from './components/TodoForm'
import Search from './components/Search'
import Filter from './components/Filter'
import axios from 'axios'

function App() {

  const [search, setSearch] = useState('')

  const [filter, setFilter] = useState('All')
  const [sort, setSort] = useState('Asc')



  // const addTodo = (text, category) => {
  //   const newTodos = [
  //     ...todos,
  //     {
  //       id: Math.floor(Math.random() * 10000),
  //       text,
  //       category,
  //       isCompleted: false,
  //     }
  //   ]
  //   setTodos(newTodos)
  // }

  // const removeTodo = (id) => {
  //   const newTodos = [...todos]
  //   const filteredTodos = newTodos.filter((todo) =>
  //     todo.id !== id ? todo : null
  //   )
  //   setTodos(filteredTodos)
  // }

  // const completeTodo = (id) => {
  //   const newTodos = [...todos]
  //   newTodos.map((todo) =>
  //     todo.id === id ? (todo.isCompleted = !todo.isCompleted) : todo
  //   )
  //   setTodos(newTodos)
  // }

  return (
    <div className='app'>
      <h1>Lista de Tarefas</h1>
      <Todo />
      <TodoForm />
    </div>
  )
}

export default App
