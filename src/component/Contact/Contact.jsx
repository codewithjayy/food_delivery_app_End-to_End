import React from "react";
import "./Contact.css";
import {
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  FaGooglePlus,
} from "react-icons/fa";


const Contact = () => {
  return (
    <section className="contact-section">
      <div className="overlay">
        <div className="contact-header">
          <h2>Contact Us</h2>
          <div className="line"></div>
          <h1>HOW TO GET IN TOUCH?</h1>
          <p>
            This section only proves that you are approachable and ready to
            accept reviews and prior bookings. People love to be associated
            with businesses that are friendly and communicate well.
          </p>
        </div>

        <div className="contact-container">
          <div className="contact-info">
            <div className="info-box">
              <h4>ADDRESS</h4>
              <p>NLP Road Sector 10, Nerul West 400706</p>
            </div>

            <div className="info-box">
              <h4>Contact Number</h4>
              <p>+91-9708147970</p>
            </div>

            <div className="info-box">
              <h4>EMAIL ADDRESS</h4>
              <p>velvetforkhungary@Contact.com</p>
            </div>

            <div className="info-box">
              <h4>FOLLOW ME</h4>
              <div className="social-icons">
                <span><FaFacebookF /></span>
                <span><FaGithub /></span>
                <span><FaLinkedinIn /></span>
                <span><FaGooglePlus/></span>
                <span><FaTwitter /></span>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <form>
              <div className="row">
                <input type="text" placeholder="Your Name" />
                <input type="email" placeholder="Your Email" />
              </div>

              <input type="text" placeholder="Subject" />
              <textarea rows="6" placeholder="Message"></textarea>

              <button type="submit">BOOK A TABLE</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;