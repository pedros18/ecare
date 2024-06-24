import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import "./Footer.css";
import logo from "../../Images/logo.png";

const Footer = () => {
  return (
    <footer className="footer text-center text-white">
      <div className="container mb-3">
        <h4>Follow Us</h4>
        <div className="social-icons">
          <FontAwesomeIcon icon={faFacebookSquare} className="icon mx-2" alt="Facebook Icon" size="2x" aria-label="Facebook" />
          <FontAwesomeIcon icon={faTwitter} className="icon mx-2" alt="Twitter Icon" size="2x" aria-label="Twitter" />
          <FontAwesomeIcon icon={faInstagram} className="icon mx-2" alt="Instagram Icon" size="2x" aria-label="Instagram" />
          <FontAwesomeIcon icon={faLinkedinIn} className="icon mx-2" alt="LinkedIn Icon" size="2x" aria-label="LinkedIn" />
        </div>
      </div>
      <div className="container">
        <img src={logo} alt="Logo" className="logo img-fluid" style={{ width: '80px' }} /> {/* Adjust the width as needed */}
      </div>
      <div className="container">
        <h4>Sayah Badreddine - IOMT TEO PROJECT</h4>
      </div>
    </footer>
  );
};

export default Footer;
