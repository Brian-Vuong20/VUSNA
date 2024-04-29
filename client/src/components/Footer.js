import React from "react";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footerContainer">
      <div className="footerLogo">
        <div className="logo">VUSNA</div>
        <div className="footer_power">@2024 Powered by love and passion</div>
      </div>
      <div className="footerContent">
        <div className="footer_Contact">
          <h4>Contact us</h4>
          <p>Email: test@gmail.com</p>
        </div>
        <div className="footer_about">
          <h4>More about</h4>
          <Link className="footer_link">Events</Link>
          <Link className="footer_link">About us</Link>
          <Link className="footer_link">Join us</Link>
        </div>
      </div>
      <div className="footerSocialMedia">
        <h4>Follow us </h4>
        <div className="social_icon">
          <Link className="icon_link">
            <CiFacebook size={40} />
          </Link>
          <Link className="icon_link">
            <FaInstagram size={40} />
          </Link>
        </div>
        <div className="footer_responsive">
          @2024 Powered by love and passion
        </div>
      </div>
    </footer>
  );
};

export default Footer;
