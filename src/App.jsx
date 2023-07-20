import { useState } from 'react'
import './App.css'

import Todo from './components/Todo'
import TodoForm from './components/TodoForm'

function App() {

  const [todos, setTodos] = useState([
    {
      id: 1,
      text: 'Estudar para conseguir emprego',
      category: 'Estudos',
      isCompleted: false,
    },
    {
      id: 2,
      text: 'ir para a academia',
      category: 'Pessoal',
      isCompleted: false,
    },
    {
      id: 3,
      text: 'Arrumar a casa',
      category: 'Pessoal',
      isCompleted: false,
    },
  ])

  const addTodo = (text, category) => {
    const newTodos = [
      ...todos,
      {
        id: Math.floor(Math.random() * 10000),
        text,
        category,
        isCompleted: false,
      }
    ]
    setTodos(newTodos)
  }

  return (
    <div className='app'>
      <h1>Lista de Tarefas</h1>
      <div className='todo-list'>
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </div>
      <TodoForm addTodo={addTodo}/>
    </div>
  )
}

export default App
