import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

import './Products.css'
import ProductCard from './ProductCard'

const Products = () => {
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [searchQuery, setSearchQuery] = useState([])

  useEffect(() => {
    fetch('http://127.0.0.1:8000/products/')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data)
        setFilteredProducts(data)
      })
      .catch((error) => {
        console.error('Erro ao buscar produtos', error)
      })
  }, [])

  const handleSearch = (event) => {
    const query = event.target.value
    setSearchQuery(query)

    const filtered = products.filter(product => 
      product.name.includes(query.toLowerCase)
    )
    setFilteredProducts(filtered)
  }

  return (
    <>
        <input
          type="text"
          className='search-input'
          placeholder="Buscar produtos..."
          value={searchQuery}
          onChange={handleSearch}
        />

        <div className="products-section">
            <h2>Novidades do site:</h2>
            <div className="products-container">
              {products.map((product) => (
                <Link to={`/product/${product.id}`} key={product.id}>
                  <ProductCard product={product}/>   
                </Link>
              ))}
            </div>
        </div>
    </>
  )
}

export default Products