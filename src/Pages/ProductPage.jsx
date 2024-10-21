import './ProductPage.css'

import Header from '../components/Header'

const ProductPage = () => {
  return (
    <>
        <Header/>
        <div className="productPage-container">
            <div className="product-title-img">
                <h2>Comprar produto</h2>
                <p>A partir de R$ 999</p>
                <img src="https://cdn.pixabay.com/photo/2020/08/26/14/29/laptop-5519651_1280.jpg" alt="" />
            </div>

            <div className="product-description">
                <h3>Descrição do produto:</h3>
                <p>Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. <br /> Nostrum reprehenderit
                    rem maxime quidem amet in ullam blanditiis.
                </p>
                <button>Adicionar ao carrinho</button>
            </div>
        </div>
        
    </>
  )
}

export default ProductPage