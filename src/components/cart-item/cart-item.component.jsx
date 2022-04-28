import "./cart-item.styles.scss";
import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";
const CartItem = ({ cartItem }) => {
  const { name, imageURL, price, quantity } = cartItem;
  const { addItemToCart, removeItemToCart } =useContext(CartContext);
  const addItemHandler = () => addItemToCart(cartItem);
  const removeItemHandler = () => removeItemToCart(cartItem);
  return (
    <div className="cart-item-container">
      <img src={require("../../serverImg" + imageURL)} alt={`${name}`} />
      <div className="item-details">
        <span className="name">{name}</span>
        <div className="price-quantity-container">
          <div className="quantity-container">
            <span className="manage-quantity-btn" onClick={addItemHandler}>
              +
            </span>
            <span>{quantity}</span>
            <span className="manage-quantity-btn" onClick={removeItemHandler}>
              -
            </span>
            <span className="price">x ${price}</span>
          </div>
          <div className="total-price-container">
            <span className="price">Rs. {quantity * price}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
