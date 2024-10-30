import './UserPage.css'

import Header from '../components/Header'

const UserPage = () => {
  return (
    <>
        <Header/>
        <h2>Editar dados de usuário:</h2>
        <div className="form-container" >
            <form action="#" method="POST">
                <div className="form-group">
                <label htmlFor="nome">Nome de usuário:</label>
                <input type="text" id="nome" name="nome" required />
                </div>
                
                <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
                </div>

                <div className="form-group">
                <label htmlFor="password">Senha:</label>
                <input type="password" id="email" name="password" required />
                </div>

                <button className='save_info' type="submit">Editar</button>
            </form>
        </div>

    </>
  )
}

export default UserPage