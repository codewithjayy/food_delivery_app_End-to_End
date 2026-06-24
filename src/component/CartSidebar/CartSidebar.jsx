import React from "react";
import "./CartSidebar.css";

const CartSidebar = ({
  setShow,
  cart,
  increaseQuantity,
  decreaseQuantity,
  removeItem,
}) => {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="sidebar">
      <button className="closeBtn" onClick={() => setShow(false)}>
        X
      </button>

      <h2>Your Cart</h2>

      {cart.length === 0 ? (
        <h3 className="emptyCart">Cart is Empty</h3>
      ) : (
        cart.map((item) => (
          <div className="cartItems" key={item.id}>
            <img src={item.image} alt={item.name} width="80" height="80" />

            <div className="cartDetails">
              <h3>{item.name}</h3>

              <p>₹{item.price}</p>
            </div>

            <div className="qtyControls">
              <button onClick={() => decreaseQuantity(item.id)}>-</button>

              <span>{item.quantity}</span>

              <button onClick={() => increaseQuantity(item.id)}>+</button>
            </div>

            <button className="removeBtn" onClick={() => removeItem(item.id)}>
              Remove
            </button>
          </div>
        ))
      )}

      <h3 className="total">Total: ₹{total}</h3>

      {cart.length > 0 && <button className="checkoutBtn">Place Order</button>}
    </div>
  );
};

export default CartSidebar;
