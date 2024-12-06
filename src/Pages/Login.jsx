import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import axios from 'axios'

import './Login.css'

import Header from '../components/Header'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post('http://127.0.0.1:8000/login/', {username, password}, { withCredentials: true })
      alert(response.data.message)
      window.location.href = '/user'
    } catch (error) {
      alert("Erro: " + (error.response?.data.error || "Senha incorreta"))
    }
  }

  return (
    <>
        <Header/>

        <div className="login">
            <h1>Inicie sessão para realizar compras</h1>
            <h2>Iniciar a sessão</h2>
            <form onSubmit={handleLogin}>
                <input type="txt" name="username" id="username" 
                required placeholder='Nome de usuário' 
                onChange={(e) => setUsername(e.target.value)}
                />

                <input type="password" name="password" id="password" 
                required placeholder='Senha' 
                onChange={(e) => setPassword(e.target.value)}
                />

                <button className='login-button'>Iniciar sessão</button>
            </form>
            
           
            {error && <p>{error}</p>} {/* Exibir mensagem de erro */}

            <span>
                <Link to="/registration">Não possui conta? Crie já.</Link>
            </span>
        </div>

    </>
  )
}

export default Login