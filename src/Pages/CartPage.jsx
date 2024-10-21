import './CartPage.css'

import Header from '../components/Header'
import CartItem from '../components/CartItem'

const CartPage = () => {
  return (
    <>
        <Header />

        <CartItem />
        <CartItem />
        
        <div className="buy_button">
          <h3>Total: R$777</h3>
          <button>Finalizar compra</button>
        </div>

        
    </>
  )
}

export default CartPage