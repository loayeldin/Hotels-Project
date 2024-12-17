import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import footerImg from "../../assets/images/home-page/customer.png";
import { useLocation } from "react-router-dom";
import { faHeadphones, faPhone } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  const location = useLocation();
  console.log(location);
  const isHomePage = location.pathname === "/home";
  let footerStyles;
  if (isHomePage) {
    footerStyles = {
      backgroundColor: "rgb(5,7,60)",
      color: "white",
    };
  } else {
    footerStyles = {
      backgroundColor: "#f8f8f8",
    };
  }

  return (
    <footer className="footer" style={footerStyles}>
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="contact-info">
              <FontAwesomeIcon icon={faHeadphones} className="phoneimg" />

              <p>Speak to our expert at 1-800-453-6744</p>
            </div>
            <div className="follow-us">
              <p className="mx-3">Follow Us</p>
              <FontAwesomeIcon
                icon={faFacebookF}
                className="icon"
                style={{ color: isHomePage ? "white" : "var(--text-color)" }}
              />
              <FontAwesomeIcon
                icon={faTwitter}
                className="icon"
                style={{ color: isHomePage ? "white" : "var(--text-color)" }}
              />
              <FontAwesomeIcon
                icon={faInstagram}
                className="icon"
                style={{ color: isHomePage ? "white" : "var(--text-color)" }}
              />
              <FontAwesomeIcon
                icon={faLinkedinIn}
                className="icon"
                style={{ color: isHomePage ? "white" : "var(--text-color)" }}
              />
            </div>
          </div>

          <div className="footer-columns">
            <div className="footer-column">
              <h4>Contact</h4>
              <p>328 Queensberry Street, North Melbourne VIC3051</p>
              <p>Australia</p>
              <a>hi@viatours.com</a>
            </div>
            <div className="footer-column">
              <h4>Company</h4>
              <ul>
                <li style={{ color: isHomePage ? "white" : "#FF7043" }}>
                  About Us
                </li>
                <li style={{ color: isHomePage ? "white" : "#FF7043" }}>
                  Tour Reviews
                </li>
                <li style={{ color: isHomePage ? "white" : "#FF7043" }}>
                  Contact Us
                </li>
                <li style={{ color: isHomePage ? "white" : "#FF7043" }}>
                  Travel Guides
                </li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Support</h4>
              <ul>
                <li style={{ color: isHomePage ? "white" : "#FF7043" }}>
                  Get in Touch
                </li>
                <li style={{ color: isHomePage ? "white" : "#FF7043" }}>
                  Help center
                </li>
                <li style={{ color: isHomePage ? "white" : "#FF7043" }}>
                  Live chat
                </li>
                <li style={{ color: isHomePage ? "white" : "#FF7043" }}>
                  How it works
                </li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Newsletter</h4>
              <p>Subscribe to the free newsletter and stay up to date</p>
              <div className="newsletter-form">
                <input type="email" placeholder="Your email address" />
                <button>Send</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
