import React from 'react'
import { RiDeleteBinLine, RiCheckLine } from 'react-icons/ri'

const Todo = ({ todo, removeTodo, completeTodo }) => {


    return (
        <div>
            <div className='todo'
                style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}>
                <div className='content'>
                    <p>{todo.text}</p>
                    <p className='category'>
                        <span></span>{todo.category}
                    </p>
                </div>
                <div>
                    <button
                        className='complete'
                        onClick={() => completeTodo(todo.id)}>
                        <RiCheckLine />

                    </button>
                    <button
                        className='remove'
                        onClick={() => removeTodo(todo.id)}>
                        <RiDeleteBinLine />

                    </button>
                </div>
            </div>

        </div>
    )
}

export default Todo