import './UserPage.css'

import Header from '../components/Header'

const UserPage = () => {
  return (
    <>
        <Header/>

        <div className="form-container" >
            <form action="#" method="POST">
                <div className="form-group">
                <label htmlFor="nome">Nome:</label>
                <input type="text" id="nome" name="nome" required />
                </div>
                
                <div className="form-group">
                <label htmlFor="dataNascimento">Data de Nascimento:</label>
                <input type="date" id="dataNascimento" name="dataNascimento" required />
                </div>
                
                <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
                </div>
                
                <div className="form-group">
                <label htmlFor="celular">Número de Celular:</label>
                <input type="tel" id="celular" name="celular" pattern="[0-9]{11}" placeholder="Ex: 11999999999" required />
                </div>
                
                <div className="form-group">
                <label htmlFor="cep">CEP:</label>
                <input type="text" id="cep" name="cep" pattern="[0-9]{8}" placeholder="Ex: 12345678" required />
                </div>
                
                <div className="form-group">
                <label htmlFor="numero">Número:</label>
                <input type="text" id="numero" name="numero" required />
                </div>

                <button className='save_info' type="submit">Salvar</button>
            </form>
        </div>

    </>
  )
}

export default UserPage