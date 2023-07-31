import React from 'react';
const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-bottom">
          <p className="copyright">
            &copy; {currentYear} Express Delivery. All Rights Reserved by <a href="#" className="copyright-link">Rafik SOUIFI</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
