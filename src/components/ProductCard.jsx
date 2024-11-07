import './ProductCard.css'

const ProductCard = ({ product }) => {

  return (
    <>
          <div className='product-card'>
              <img src={`http://127.0.0.1:8000/media/${product.image}`} alt={product.name}/>
              <h3>{product.name}</h3>
              <p>A partir de R$ {product.price}</p>
          </div>
    </>   
  )
}

export default ProductCard