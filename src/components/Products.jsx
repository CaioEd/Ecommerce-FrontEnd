import React from 'react'
import { Link } from 'react-router-dom';

import './Products.css'
import ProductCard from './ProductCard'

const Products = () => {
  return (
    <>
        <div className="products-section">
            <h2>Novidades do site:</h2>
            <div className="products-container">
                <Link to="/product">
                  <ProductCard/>   
                </Link>

                <Link to="/product">
                  <ProductCard/>   
                </Link>
                
                <Link to="/product">
                  <ProductCard/>   
                </Link>
            </div>
        </div>
    </>
  )
}

export default Products