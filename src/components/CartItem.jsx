import "./CartItem.css";

const CartItem = () => {
  return (
    <>
      <div className="cart-item">
        <div className="cart-item-image">
          <img
            src="https://cdn.pixabay.com/photo/2020/08/26/14/29/laptop-5519651_1280.jpg"
            alt=""
          />
        </div>

        <div className="cart-item-details">
          <h3>Produto</h3>
          <p className="product-description">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            repellendus nihil velit placeat obcaecati corporis, aut quae aliquam
            consequuntur, ab qui illo at vero nesciunt, sapiente dicta rem a
            quis?
          </p>
          <p className="product-price">R$777</p>
        </div>
      </div>
    </>
  );
};

export default CartItem;
