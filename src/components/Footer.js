import React from "react";
import "./footer.css";
import {
  FaGithub,
  FaLinkedin,
  FaTelegram,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-content">
        <div className="footer-section">
          <h3><span>YEAB</span></h3>
          <p>
            Creative Frontend Developer crafting modern, responsive,
            and interactive web experiences.
          </p>
        </div>

        <div className="footer-section">
          <h4>Contact</h4>
          <p><FaEnvelope /> yabget19@email.com</p>
          <p><FaPhone /> +251 961 983 411</p>
          <p><FaMapMarkerAlt /> Addis Ababa, Ethiopia</p>
        </div>
    
        <div className="footer-section">
          <h4>Follow Me</h4>
          <div className="socials">
            <a href="https://github.com/yeabget" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://t.me/" target="_blank" rel="noreferrer">
              <FaTelegram />
            </a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Yeabsira Getachew. All rights reserved.</p>
      </div>

    </footer>
  );
}