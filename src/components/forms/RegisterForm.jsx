import '../forms/RegisterForm.css'
import { Link } from 'react-router-dom'

const RegisterForm = () => {
    return (
        <div className='containerRegister'>
            <div className='registerForm'>
            <img src='../../src/img/pngTask.png' alt="taskLog" />
                <form action="">
                    <div>
                        <input className='inputRegister' type="text" placeholder="Username" />
                    </div>
                    <div>
                        <input className='inputRegister' type="email" placeholder="Email" />
                    </div>
                    <div>
                        <input className='inputRegister' type="password" placeholder="Password" />
                    </div>
                    <div>
                        <input className='inputRegister' type="password" placeholder="Password" />
                    </div>
                </form>
                <button className='buttonRegister'>Register</button>
                <p>Já possui cadastro ? Faça o <Link to='/'> login</Link> </p>
            </div>
        </div>
    )
}

export default RegisterForm