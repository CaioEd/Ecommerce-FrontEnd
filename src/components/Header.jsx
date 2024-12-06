import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
    <div className="flex justify-between items-center mt-3 border-b border-black/20 p-5">
            <Link to='/'>
              <h1 className='text-3xl ml-2 uppercase'>E-commerce</h1>
            </Link>

            <div className="flex items-center justify-between gap-6 mr-5">
                <a href="/user">
                    <i className="bi bi-person-circle" style={{ fontSize: '30px' }}></i>
                </a>
                <a href="/cart">
                  <i className="bi bi-cart" style={{ fontSize: '30px' }}></i>
                </a>
                <Link to='/login'>
                  <button className='text-white bg-violet-400'>Login</button>                
                </Link>

            </div>
    </div>
    </>
  )
}

export default Header