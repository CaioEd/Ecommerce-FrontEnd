import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

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
      const response = await fetch('http://127.0.0.1:8000/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      })
      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Erro ao fazer login')
      }

      // SAVE IN LocalStorage
      localStorage.setItem('access_token', data.access)
      localStorage.setItem('refresh_token', data.refresh)

      navigate('/') // Redirect to Home Page
    } catch (err) {
      setError(err.message)
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