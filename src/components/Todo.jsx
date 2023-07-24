import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { RiDeleteBinLine, RiCheckLine } from 'react-icons/ri'

const Todo = () => {

    const [task, setTask] = useState([])

    const getTasks = async () => {
        try {
            const response = await axios.get('http://localhost:3000/task')
            const data = response.data

            setTask(data)

        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getTasks()
    }, [])



    return (
        <div>
            <div className='todo-list'>
                <div className='todo'>
                    {
                        task.map((task) => (

                            <div className='content' key={task.id}>
                                <p>{task.text}</p>
                                <p className='category'>
                                    <span></span>{task.category}
                                </p>
                            </div>
                        ))
                    }
                    <div>
                        <button
                            className='complete'
                            onClick={() => completeTodo(task.id)}>
                            <RiCheckLine />

                        </button>
                        <button
                            className='remove'
                            onClick={() => removeTodo(task.id)}>
                            <RiDeleteBinLine />

                        </button>
                    </div>
                </div>
            </div>

        </div >
    )
}

export default Todo