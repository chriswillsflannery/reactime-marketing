/* eslint-disable react/jsx-filename-extension */
import React from 'react';
const Footer = () => (
  
  <footer style={{ marginTop: '2rem', color: 'white', fontFamily: "Raleway" }}>
      ©
    {' '}
    {new Date().getFullYear()}
    , Built with
    {' '}
    <a
      style = {{ textDecoration: 'none', color: '#ff6569', fontFamily: "Raleway" }}
      href="https://www.gatsbyjs.org"
    >
Gatsby
    </a>
  </footer>
);
export default Footer;
