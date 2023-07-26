import { useState } from 'react'

import taskFetch from '../axios/config'

const TodoForm = () => {

    const [text, setText] = useState()
    const [category, setCategory] = useState()

    const handleSubmit = async (e) => {
        e.preventDefault()


        await taskFetch.post("/task", {
            text: text,
            category: category,
            complete: false
        })
            .then((response) => {
                console.log(response)

                // window.location.reload()
            })
            .catch((err) => {
                console.log(err)
            })

        setText('')
        setCategory('')
    }

    return (
        <div className='todo-form'>
            <h2>Criar tarefa</h2>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input
                    type="text"
                    placeholder='Adicionar Tarefa'
                    value={text || ''}
                    onChange={(e) => setText(e.target.value)}
                />
                <select value={category || ''} onChange={(e) => setCategory(e.target.value)}>
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