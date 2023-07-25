import { useState } from 'react'

import taskFetch from '../axios/config'

const TodoForm = () => {

    // const [value, setValue] = useState('')
    // const [category, setCategory] = useState('')

    const [text, setText] = useState()
    const [category, setCategory] = useState()

    const handleSubmit = async (e) => { 
        e.preventDefault()
        
        const task = {text, category, complete: false}

        await taskFetch.post('/task', { 
            body: task,
        })

    }

    return (
        <div className='todo-form'>
            <h2>Criar tarefa</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder='Adicionar Tarefa'
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                <select value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value="">Selecione uma categoria</option>
                    <option value="Trabalho">Trabalho</option>
                    <option value="Pessoal">Pessoal</option>
                    <option value="Estudos">Estudos</option>
                </select>
                <button type='submit'>Criar tarefa</button>
            </form>


        </div>
    )
}

export default TodoForm