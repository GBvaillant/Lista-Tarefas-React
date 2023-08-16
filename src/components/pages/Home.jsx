import { useEffect, useState } from 'react'
import Todo from '../Todo'
import TodoForm from '../TodoForm'
import Search from '../Search'
import Filter from '../Filter'
import taskFetch from '../../axios/config'

const Home = () => {
    const [search, setSearch] = useState('')

    const [filter, setFilter] = useState('All')

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
            <Filter filter={filter} setFilter={setFilter} />
            <div className='todo-list'>
                {task
                    .filter((task) =>
                        filter === "All"
                            ? true
                            : filter === "completed"
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

export default Home