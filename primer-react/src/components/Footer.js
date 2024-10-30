import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <footer className="footer">
        <div className="footer-content">
          <p>© 2024 Your Company. All rights reserved.</p>
          <nav className="footer-nav">
            <ul>
              <li><a href="/terms">Terms of Service</a></li>
              <li><a href="/privacy">Privacy Policy</a></li>
              <li><a href="/contact">Contact Us</a></li>
            </ul>
          </nav>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
