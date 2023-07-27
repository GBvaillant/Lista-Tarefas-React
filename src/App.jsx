import { useEffect, useState } from 'react'
import './App.css'

import Todo from './components/Todo'
import TodoForm from './components/TodoForm'
import Search from './components/Search'
import Filter from './components/Filter'
import axios from 'axios'
import taskFetch from './axios/config'

function App() {

  const [search, setSearch] = useState('')

  const [filter, setFilter] = useState('All')
  const [sort, setSort] = useState('Asc')


  const [task, setTask] = useState([])

  const getTasks = async () => {
    try {
      const response = await taskFetch.get('/task')

      const data = response.data
      setTask(data)

    } catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    getTasks()
  }, [task])


  return (
    <div className='app'>
      <h1>Lista de Tarefas</h1>
      <Search search={search} setSearch={setSearch} />
      <Filter filter={filter} setFilter={setFilter} task={task} />
      <div className='todo-list'>
        {
          task
            .filter((task) =>
              filter === "All"
                ? true
                : filter === task.complete 
                  ? task.complete
                  : !task.complete
                  )
            .filter((task) =>
              task.text.toLowerCase().includes(search.toLowerCase()))
            .map((task) => (
              <Todo key={task._id} task={task} />
            ))
        }
      </div>
      <TodoForm />
    </div>
  )
}

export default App
