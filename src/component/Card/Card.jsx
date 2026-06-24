import React from "react";
import "./Card.css";

const Card = ({ cardData, addToCart }) => {
  return (
    <div className="cardContainer">
      {cardData.length === 0 ? (
        <h2>No Item Found</h2>
      ) : (
        cardData.map((item) => (
          <div className="card" key={item.id}>
            <img
              src={item.image}
              alt={item.name}
              height="250px"
              width="300px"
            />

            <h3>{item.name}</h3>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
              doloremque!
            </p>

            <p className="price">Price: ₹{item.price}</p>

            <button className="btn1" onClick={() => addToCart(item)}>
              Add to Cart
            </button>

            <button className="btn2">Buy Now</button>
          </div>
        ))
      )}
    </div>
  );
};

export default Card;
