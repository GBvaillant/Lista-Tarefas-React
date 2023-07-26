import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { RiDeleteBinLine, RiCheckLine } from 'react-icons/ri'
import taskFetch from '../axios/config'

const Todo = ({ task }) => {

    const removeTask = async (id) => {

        await taskFetch.delete(`/task/${id}`, {

            id: id

        })
            .then((response) => {
                console.log(response)
                // window.location.reload()
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <div>
            <div className='todo'>
                <div className='content' key={task.id}>
                    <p>{task.text}</p>
                    <p className='category'>
                        <span></span>{task.category}
                    </p>
                </div>
                <div>
                    <button
                        className='complete'
                        onClick={() => completeTodo(task.id)}>
                        <RiCheckLine />

                    </button>
                    <button
                        className='remove'
                        onClick={() => removeTask(task._id)}>
                        <RiDeleteBinLine />

                    </button>
                </div>
            </div>
        </div >
    )
}

export default Todo