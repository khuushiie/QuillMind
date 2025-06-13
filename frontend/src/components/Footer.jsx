import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} QuillMind. All rights reserved.</p>
      <p>Designed with 💜 in India.</p>
    </footer>
  );
};

export default Footer;