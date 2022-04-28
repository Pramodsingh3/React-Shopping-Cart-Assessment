import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

// import Button from '../button/button.component';

import "./product-card.styles.scss";

const ProductCard = ({ product }) => {
  const { name, price, imageURL, description } = product;
  const { addItemToCart } = useContext(CartContext);
  console.log("HELLO", imageURL);
  const addProductToCart = () => addItemToCart(product);

  return (
    <div className="product-card-container">
      <div className="prod-name">
        <span>{name}</span>
      </div>
      <div className="image-description">
        <img src={require("../../serverImg" + imageURL)} alt={`${name}`} />
        <div className="prod-description">
          <span>{description}</span>
        </div>
      </div>
      <section className="price-container">
        <div className="footer">
          <span className="name">{`MRP Rs.${price}`}</span>
        </div>
        <div className="btn-container">
          <button className="small-btn" onClick={addProductToCart}>
            Buy Now
          </button>
          <button className="full-btn" onClick={addProductToCart}>
            {`Buy Now @ Rs.${price}`}
          </button>
        </div>
      </section>
    </div>
  );
};

export default ProductCard;
