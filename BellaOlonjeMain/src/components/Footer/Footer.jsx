import React, { useEffect, useState } from "react";
import {
  FaFacebookSquare,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import Logo from "../../assets/logo.png";
import "./Footer.css";

const Footer = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <footer className="footer">
      <img className="footer__logo" src={Logo} alt="Logo" />
      <div className="footer__social">
        <a href="https://www.twitter.com" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a href="https://www.facebook.com" rel="noopener noreferrer">
          <FaFacebookSquare />
        </a>
        {isMobile ? (
          <a
            className="footer__social-icon linkedin"
            href="https://www.linkedin.com"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        ) : (
          <a
            className="footer__social-icon instagram"
            href="https://www.instagram.com"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        )}
      </div>
      {isMobile ? (
        <p className="footer__mobile">
          Just type what's on your mind and we'll
        </p>
      ) : (
        <div className="footer__desktop">
          Copyright &copy; {new Date().getFullYear()} Bella Onojie.com
        </div>
      )}
    </footer>
  );
};

export default Footer;
