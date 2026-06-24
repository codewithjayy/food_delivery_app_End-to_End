import React from "react";
import "./CartSidebar.css";


const CartSidebar = ({setShow}) => {
  return (
    <div className="sidebar">
      {/* //call the cross icon so that when user click on it the sidebar will close */}

      <button className="closeBtn" onClick={() => setShow(false)}>
        X
      </button>
      <h2>Cart</h2>
      <div className="cartItems">
        <img src="https://via.placeholder.com/150" alt="Product" />
        <div className="cartDetails">
          <h3>Product Name</h3>
          <p>Price:</p>
          <p>Quantity: 1</p>
        </div>
        <div className="qtyControls">
          <button>-</button>
          <span>qqty</span>
          <button>+</button>
        </div>
        <button className="removeBtn">Remove</button>
      </div>
      <h3 className="total">Total:</h3>
      <button className="checkoutBtn">Place Order</button>
    </div>
  );
};
export default CartSidebar;
