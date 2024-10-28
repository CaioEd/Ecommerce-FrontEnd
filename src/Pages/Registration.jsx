import { Link } from 'react-router-dom';
import { useState } from 'react';

import './Registration.css'

import Header from '../components/Header'

const Registration = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (password !== confirmPassword) {
      setMessage('As senhas não coincidem!')
    }

    try {
      const response = await fetch('http://127.0.0.1:8000/registration/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.success); // Exibir mensagem de sucesso

        // Limpeza de formulário
        setUsername('')
        setEmail('')
        setPassword('')
        setConfirmPassword('')
      } else {
        setMessage(data.error); // Exibir mensagem de erro
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('Ocorreu um erro ao cadastrar. Tente novamente mais tarde.'); // Mensagem de erro 
    }
  }

  return (
    <>
      <Header/>
      
        <div className="register">
          <h1>Crie uma conta para realizar compras</h1>
          <h2>Cadastro</h2>
          <form onSubmit={handleSubmit}>
            <input type="text" name="name" id="name" 
            required placeholder="Nome de usuário" value={username}
            onChange={(e) => setUsername(e.target.value)}
            />

            <input type="email" name="email" id="email" 
            required placeholder="E-mail" value={email}
            onChange={(e) => setEmail(e.target.value)} 
            />

            <input type="password" name="password" id="password" 
            required placeholder="Senha" value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
            <input type="password" name="confirmPassword" id="confirmPassword" required placeholder="Confirme sua senha"  />
            <button className="register-button">Cadastrar</button>
          </form>

          {message && <p>{message}</p>}
          <span>
            <Link to="/login">Já possui uma conta? Faça login.</Link>
          </span>
        </div>

    </>
  )
}

export default Registration