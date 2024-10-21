import { Link } from 'react-router-dom';

import './Registration.css'

import Header from '../components/Header'
import Products from '../components/Products'

const Registration = () => {
  return (
    <>
      <Header/>
      
        <div className="register">
          <h1>Crie uma conta para realizar compras</h1>
          <h2>Cadastro</h2>
          <form action="">
            <input type="text" name="name" id="name" required placeholder="Nome completo" />
            <input type="email" name="email" id="email" required placeholder="E-mail" />
            <input type="password" name="password" id="password" required placeholder="Senha" />
            <input type="password" name="confirmPassword" id="confirmPassword" required placeholder="Confirme sua senha" />
            <button className="register-button">Cadastrar</button>
          </form>

          <span>
            <Link to="/login">Já possui uma conta? Faça login.</Link>
          </span>
        </div>

    </>
  )
}

export default Registration