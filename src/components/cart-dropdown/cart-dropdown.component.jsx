import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/cart.context";
import { ReactComponent as CloseIcon } from "../../assets/close-svgrepo-com.svg";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import "react-responsive-modal/styles.css";
import "./cart-dropdown.styles.scss";

const CartDropdown = () => {
  const { isCartOpen, cartItems, setIsCartOpen, cartCount, cartTotal } =
    useContext(CartContext);
  const navigate = useNavigate();
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };
return (
    <div className="cart-dropdown-container">
      <header className="cart-header">
        <div className="title-quantity">
          <span className="header-title">My Cart</span>
          <span>{`(${cartCount} items)`}</span>
        </div>
        <div className="close-icon" onClick={toggleIsCartOpen}>
          <CloseIcon className="close-icon" />
        </div>
      </header>
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
        <section className="section-image-container">
          <img
            src={require("../../assets/images/lowest-price.png")}
            width="40px"
            height="20px"
            alt=""
          />
          <p className="slog">You won't find it cheaper anywhere</p>
        </section>
      </div>

      <footer className="button-container-footer">
        <span>Promo code can be applied at payment page</span>
        <Button onClick={goToCheckoutHandler}>
          <div className="button-body">
            <span>Proceed to Checkout</span>

            <span>{`${cartTotal} `} &#8680;</span>
          </div>
        </Button>
      </footer>
    </div>
  );
};

export default CartDropdown;
