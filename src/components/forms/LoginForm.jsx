import { Link } from 'react-router-dom'
import '../forms/LoginForm.css'
import { useState } from 'react'
import taskFetch from '../../axios/config'


const LoginForm = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        const formLogin = {
            username: username,
            password: password
        }

        try {
            await taskFetch.post("/login", formLogin)
            console.log('Usuário autenticado')
            alert('User autenticado')
        } catch (err) {
            console.log('error: ', err)
        }
    }
    return (
        <div className='container'>
            <div className='loginForm'>
                <img src='../../src/img/pngTask.png' alt="taskLog" />
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div>
                        <input
                            className='inputLogin'
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div>
                        <input
                            className='inputLogin'
                            type="password"
                            autoComplete='on'
                            placeholder="Senha"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                    </div>
                    <button className='buttonLogin' type="submit">Login</button>
                </form>

                <p>clique <Link to='/register'>aqui</Link> para criar uma conta !</p>
            </div>
        </div >
    )
}

export default LoginForm