import React from "react";
import "./Footer.css";
import {
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  FaGooglePlus,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Info */}
        <div className="footer-column">
          <h3>Today Specials</h3>
          <ul>
            <li>Mutton Biryani</li>
            <li>Chicken Curry</li>
            <li>Beef Steak</li>
            <li>Fish Fry</li>
            <li>Prawn Tempura</li>
            <li>Shrimp Scampi </li>
          </ul>
        </div>

        {/* Getting Started */}
        <div className="footer-column">
          <h3>Today's Starter</h3>
          <ul>
            <li>Chicken Pahadi</li>
            <li></li>
            <li>Chicken Tikka</li>
            <li>Fish Malai</li>
            <li>Prawn Biryani</li>
            <li>Shrimp Curry</li>
          </ul>
        </div>

        {/* Resources */}
        <div className="footer-column">
          <h3>Resources</h3>
          <ul>
            <li>API</li>
            <li>Form Validation</li>
            <li>Accessibility</li>
            <li>Marketplace</li>
            <li>Visibility</li>
            <li>Community</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="footer-column newsletter">
          <h3>Welcome to Valvet Fork</h3>

          <p>
            Please Visit to our Restaurant and Enjoy the Food. We are always ready to serve you with our best. Please Visit to our Restaurant and Enjoy the Food. We are always ready to serve you with our best.
          </p>

          <div className="newsletter-form">
            <input
              type="email"
              placeholder="Your email"
            />
            <button>
              ENTER
            </button>
          </div>

          <div className="social-icons">
                <span><FaFacebookF /></span>
                <span><FaGithub /></span>
                <span><FaLinkedinIn /></span>
                <span><FaGooglePlus/></span>
                <span><FaTwitter /></span>
              </div>
        </div>

      </div>

    </footer>
  );
};

export default Footer;