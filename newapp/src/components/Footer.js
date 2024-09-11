// src/components/Footer.js
import React from 'react';
import './Footer.css'; // Import the CSS file for styling

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2024 Sandy Gray</p>
        <nav className="footer-nav">
          <ul>
            <li><a href="/about">About</a></li>
            <li><a href="/terms">Terms and Conditions</a></li>
            <li><a href="/privacy">Privacy</a></li>
          </ul>
        </nav>
        <p className="footer-credit">Website by Humaan</p>
      </div>
    </footer>
  );
}

export default Footer;
