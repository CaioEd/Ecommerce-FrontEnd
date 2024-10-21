import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

// Pages
import Home from './pages/Home'
import ProductPage from './Pages/ProductPage'
import Login from './Pages/Login'
import Registration from './Pages/Registration'
import UserPage from './Pages/UserPage'
import CartPage from './Pages/CartPage'

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product' element={<ProductPage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/registration' element={<Registration/>} />
          <Route path='/user' element={<UserPage />}></Route>
          <Route path='/cart' element={<CartPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
