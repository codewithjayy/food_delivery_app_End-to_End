import React from "react";
import "./About.css";
import chef from "../../assets/chill_boy.png";

const About = () => {
  return (
    <section className="aboutContainer">
      {/* Hero Section */}
      <div className="heroSection">
        <div className="heroContent">
          <span className="tag">Fresh & Healthy</span>

          <h1>
            All in Good Taste <br />
            Food With <span>Velvet Fork</span>
          </h1>

          <p>
            Welcome to Velvet Fork Restaurant, where delicious flavors meet
            fresh ingredients. We serve handcrafted meals prepared with passion,
            bringing unforgettable dining experiences to every guest.
          </p>

          <div className="heroButtons">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="emailInput"
            />
            <button className="startBtn">Get Started</button>
          </div>
        </div>

        <div className="heroImage">
          <img
            src="https://images.unsplash.com/photo-1513104890138-7c749659a591"
            alt="Pizza"
          />
        </div>
      </div>

      {/* About Section */}
      <div className="aboutContent">
        <div className="aboutImage">
          <img src={chef} alt="Chef" />
        </div>

        <div className="aboutText">
          <span className="tag"></span>

          <h2>Welcome To Velvet Fork Restaurant</h2>

          <p>
            At Velvet Fork Restaurant, we believe food is more than just a
            meal—it's an experience. Our chefs carefully select fresh
            ingredients and transform them into dishes that delight every
            palate.
          </p>

          <p>
            Whether you're craving authentic Italian pizza, healthy salads, or
            mouthwatering desserts, our menu is designed to satisfy every food
            lover. Quality, taste, and customer satisfaction are at the heart of
            everything we do.
          </p>

          <button className="storyBtn">Explore Our Story</button>
        </div>
      </div>

      {/* Food Gallery */}
      <div className="foodGallery">
        <h2>Our Special Dishes</h2>
         <div className="galleryGrid">
        <div className="galleryItem">
          <img
            src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38"
            alt="Pizza"
          />
          <h3>Pizza</h3>
        </div>

        <div className="galleryItem">
          <img
            src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c"
            alt="Salad"
          />
          <h3>Salad</h3>
        </div>

        <div className="galleryItem">
          <img
            src="https://images.unsplash.com/photo-1565958011703-44f9829ba187"
            alt="Burger"
          />
          <h3>Burger</h3>
        </div>

        <div className="galleryItem">
          <img
            src="https://images.unsplash.com/photo-1551782450-a2132b4ba21d"
            alt="Food"
          />
          <h3>Special Dish</h3>
        </div>
        </div>
      </div>
    </section>
  );
};

export default About;
