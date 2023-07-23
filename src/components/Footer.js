import React from 'react';
import './Footer.css'; // Import the CSS file for footer styles

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <a href="/">Home</a>
          {/* <a href="/paywall">PaymentPage</a> */}
          {/* <a href="/"></a> */}
          {/* Add more footer links as needed */}
        </div>
        <div className="footer-contact">
          <p>Email: munene01denis@gmail.com</p>
          <p>Phone: +254796772263</p>
        </div>
      </div>
      {/* <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Your Website Name. All rights reserved.</p>
      </div> */}
    </footer>
  );
};

export default Footer;
