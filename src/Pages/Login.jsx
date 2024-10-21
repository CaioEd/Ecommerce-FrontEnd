import { Link } from 'react-router-dom';

import './Login.css'

import Header from '../components/Header'
import Products from '../components/Products'

const Login = () => {
  return (
    <>
        <Header/>

        <div className="login">
            <h1>Inicie sessão para realizar compras</h1>
            <h2>Iniciar a sessão</h2>
            <form action="">
                <input type="email" name="email" id="email" required placeholder='E-mail' />
                <input type="password" name="password" id="password" placeholder='Senha' />
                <button className='login-button'>Iniciar sessão</button>
            </form>

            <span>
                <Link to="/registration">Não possui conta? Crie já.</Link>
            </span>
        </div>

    </>
  )
}

export default Login