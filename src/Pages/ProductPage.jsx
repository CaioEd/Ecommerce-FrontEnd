import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

import './ProductPage.css'

import Header from '../components/Header'

const ProductPage = () => {
  const { id } = useParams() // ID da URL
  const [product, setProduct] = useState(null)

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/products/${id}/`)
        .then((response) => response.json())
        .then((data) => setProduct(data))
        .catch((error) => console.error('Error fetching product:', error))
  }, [id])

    if (!product) {
        return <p>Carregando...</p>
    }

  return (
    <>
        <Header/>
        <div className="productPage-container">
            <div className="product-title-img">
                <h2>{product.name}</h2>
                <p>A partir de R$ {product.price}</p>
                <img src={`http://127.0.0.1:8000/${product.image}`} alt={product.title} />
            </div>

            <div className="product-description">
                <h3>Descrição do produto:</h3>
                <p>{product.description}</p>
                <button>Adicionar ao carrinho</button>
            </div>
        </div>
        
    </>
  )
}

export default ProductPage