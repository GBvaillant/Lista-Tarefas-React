import { useState } from 'react'
import '../forms/RegisterForm.css'
import { Link } from 'react-router-dom'
import taskFetch from '../../axios/config'

const RegisterForm = () => {

    const [username, setUserName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [confirmPass, setConfirmPass] = useState()

    const handleSubmit = async (e) => {
        e.preventDefault()

        const FormData = {
            username: username,
            email: email,
            password: password,
            confirmPass: confirmPass
        }

        try {
            const response = await taskFetch.post("/createUser", FormData)
            console.log('cadastro realizado', response.data)
            alert('Usuário criado com sucesso!!')
        } catch (err) {
            console.log('error: ', err)
        }

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
                            autoComplete='on'
                            value={password || ''}
                            onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div>
                        <input
                            className='inputRegister'
                            type="password"
                            placeholder="Confirm password"
                            value={confirmPass || ''}
                            onChange={(e) => setConfirmPass(e.target.value)}
                            autoComplete='on' />
                        {confirmPass == !password ? alert('Senhas não conferem') : ""}

                    </div>
                    <button type='submit' className='buttonRegister'>Register</button>
                </form>
                <p>Já possui cadastro ? Faça o <Link to='/'> login</Link> </p>
            </div>
        </div>
    )
}

export default RegisterForm