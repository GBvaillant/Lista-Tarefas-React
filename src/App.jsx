import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './components/pages/Login'
import Home from './components/pages/Home'
import RegisterForm from './components/forms/RegisterForm'

function App() {

  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path='/register' element={<RegisterForm />} />
      </Routes>
    </Router>

  )
}

export default App
