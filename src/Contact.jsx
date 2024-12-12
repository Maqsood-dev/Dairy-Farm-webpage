import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <footer className="contact-container">
      <div className="contact-section">
        <div className="contact-column">
          <h3>Our Office</h3>
          <p>📍 123 Street, Pakistan, Larkana</p>
          <p>📞 +92 3188017708</p>
          <p>📧 maqsoodahmedjakhro6@gmail.com</p>
          <div className="social-icons">
            <a href="#"><i class="fa-brands fa-twitter"></i></a>
            <a href="#"><i class="fa-brands fa-facebook"></i></a>
            <a href="#"><i class="fa-brands fa-youtube"></i></a>
            <a href="#"><i class="fa-brands fa-linkedin"></i></a>
          </div>
        </div>
        <div className="contact-column">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Our Services</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Support</a></li>
          </ul>
        </div>
        <div className="contact-column">
          <h3>Business Hours</h3>
          <p>Monday - Friday: <strong>09:00 AM - 07:00 PM</strong></p>
          <p>Saturday: <strong>09:00 AM - 12:00 PM</strong></p>
          <p>Sunday: <strong>Closed</strong></p>
        </div>
        <div className="contact-column">
          <h3>Newsletter</h3>
          <p>Subscribe to our newsletter for updates and offers.</p>
          <div className="newsletter-signup">
            <input type="email" placeholder="Your email" />
            <button className="signup-button">SignUp</button>
          </div>
        </div>
      </div>
      <div className="contact-footer">
        <p>© Your Site Name, All Rights Reserved.</p>
        <p>Designed By <a href="#">yourname</a></p>
      </div>
    </footer>
  );
};

export default Contact;
