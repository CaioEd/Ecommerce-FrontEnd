import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
    <div className="header">
            <Link to='/'>
              <h1>E-commerce</h1>
            </Link>
            <div className="right-header">
                <input type="text" className='search-input'  placeholder='Pesquisar'/>
                <a href="/user">
                    <i className="bi bi-person-circle" style={{ fontSize: '30px' }}></i>
                </a>
                <Link to='/login'>
                  <button>Login</button>                
                </Link>
            </div>
    </div>
    </>
  )
}

export default Header