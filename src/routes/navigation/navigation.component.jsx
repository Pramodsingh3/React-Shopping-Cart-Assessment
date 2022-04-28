import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import Footer from "../../components/footer/footer.component";


import { CartContext } from "../../contexts/cart.context";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import logo from "../../assets/images/logo.png";



import "./navigation.styles.scss";

const Navigation = () => {
 
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <Fragment>
      <div className="navigation">
        <section className="logo-conatainer">
          <img
            src={logo}
            className="logo"
            width="140"
            height="60"
            alt="Flexbox.ninja"
          />
          <nav className="links">
            <Link className="nav-link" to="/">
              Home
            </Link>
            <Link className="nav-link" to="/shop">
              Products
            </Link>
          </nav>
        </section>
        <div className="nav-links-container">
          <div className="links">
            {false ? (
              <span className="nav-link" >
                SIGN OUT
              </span>
            ) : (
              <Link className="nav-link" to="/signin">
                SIGN IN
              </Link>
            )}
            <Link className="nav-link" to="/signup">
              REGISTER
            </Link>
          </div>
          <div className="cart-icon">
            <CartIcon />
            <span>items</span>
          </div>
        </div>
        {isCartOpen ? <CartDropdown /> : null}
      </div>
      <Outlet />
      <p className="priceText">
        Copyright © 2011-2018 Sabka Bazaar Grocery Supplies Pvt Ltd:
      </p>
    </Fragment>
  );
};

export default Navigation;
