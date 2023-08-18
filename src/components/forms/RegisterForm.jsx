import { useState } from 'react'
import '../forms/RegisterForm.css'
import { Link } from 'react-router-dom'
import taskFetch from '../../axios/config'

const RegisterForm = () => {

    const [username, setUserName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const handleSubmit = async (e) => {
        e.prefentDefault()

        await taskFetch.post("/createUser", {
            username: username,
            email: email,
            password: password,
        })
            .then((response) =>
                console.log(response))
            .catch((err) => {
                console.log(err)
            })

        setUserName('')
        setEmail('')
        setPassword('')

    }
    return (
        <div className='containerRegister'>
            <div className='registerForm'>
                <img src='../../src/img/pngTask.png' alt="taskLog" />
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div>
                        <input
                            className='inputRegister'
                            type="text"
                            placeholder="Username"
                            value={username || ''}
                            onChange={(e) => setUserName(e.target.value)} />
                    </div>
                    <div>
                        <input
                            className='inputRegister'
                            type="email"
                            placeholder="Email"
                            value={email || ''}
                            onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div>
                        <input
                            className='inputRegister'
                            type="password"
                            placeholder="Password"
                            value={password || ''}
                            onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div>
                        <input className='inputRegister' type="password" placeholder="Confirm password" name='confirmPass' />
                    </div>
                </form>
                <button className='buttonRegister'>Register</button>
                <p>Já possui cadastro ? Faça o <Link to='/'> login</Link> </p>
            </div>
        </div>
    )
}

export default RegisterForm