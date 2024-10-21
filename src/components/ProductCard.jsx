import React from 'react'
import './ProductCard.css'

const ProductCard = () => {
  return (
    <>
        <div className='product-card'>
            <img src="https://cdn.pixabay.com/photo/2020/08/26/14/29/laptop-5519651_1280.jpg" alt=""/>
            <h3>Produto</h3>
            <p>A partir de R$ 999</p>
        </div>
    </>   
  )
}

export default ProductCard