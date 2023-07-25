import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { RiDeleteBinLine, RiCheckLine } from 'react-icons/ri'

const Todo = ({task}) => {
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
                        onClick={() => removeTodo(task.id)}>
                        <RiDeleteBinLine />

                    </button>
                </div>
            </div>
        </div >
    )
}

export default Todo