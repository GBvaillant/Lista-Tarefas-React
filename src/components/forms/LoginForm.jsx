import { Link } from 'react-router-dom'
import '../forms/LoginForm.css'


const LoginForm = () => {
    return (
        <div className='container'>
            <div className='loginForm'>
                <img src='../../src/img/pngTask.png' alt="taskLog" />
                <form action="">
                    <div>
                        <input className='inputLogin' type="text" placeholder="Username" />
                    </div>
                    <div>
                        <input className='inputLogin' type="password" autoComplete='on' placeholder="Senha" />
                    </div>
                </form>
                <button className='buttonLogin' type="submit">Login</button>
                <p>clique <Link to='/register'>aqui</Link> para criar uma conta !</p>
            </div>
        </div >
    )
}

export default LoginForm