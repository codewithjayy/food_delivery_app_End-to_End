import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import "./Navbar.css";
import CartSidebar from "../CartSidebar/CartSidebar";

const Navbar = ({ cart, increaseQuantity, decreaseQuantity, removeItem }) => {
  const [show, setShow] = useState(false);

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="mainContainer">
      <div className="logo">
        <div className="foodlogo">🥞</div>
        <div>Velvet Fork Restaurant</div>
      </div>

      <nav>
        <ul className="listItems">
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/about">About</Link>
          </li>

          <li>
            <Link to="/contact">Contact</Link>
          </li>

          <li>
            <Link to="" onClick={() => setShow(!show)}>
              <div className="cartIcon">
                <FaCartShopping className="cartSvg" />

                {cartCount > 0 && (
                  <span className="cartCount">{cartCount}</span>
                )}
              </div>
            </Link>
          </li>
        </ul>
      </nav>

      {show && (
        <CartSidebar
          cart={cart}
          setShow={setShow}
          increaseQuantity={increaseQuantity}
          decreaseQuantity={decreaseQuantity}
          removeItem={removeItem}
        />
      )}
    </div>
  );
};

export default Navbar;
