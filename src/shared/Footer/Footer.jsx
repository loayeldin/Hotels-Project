import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import footerImg from'../../assets/images/home-page/customer.png'

function Footer() {
  return (
    <footer className="footer">
    <div className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <div className="contact-info">
            <img src={footerImg} alt="Phone" width="24" height="24" />
            <p>
              Speak to our expert at
              <a href="tel:1-800-453-6744">1-800-453-6744</a>
            </p>
          </div>
          <div className="follow-us" >
            <p className="mx-3">Follow Us</p>
            <FontAwesomeIcon icon={faFacebookF} className='icon' />
            <FontAwesomeIcon icon={faTwitter} className='icon' />
            <FontAwesomeIcon icon={faInstagram} className='icon'/>
            <FontAwesomeIcon icon={faLinkedinIn}className='icon' />
          </div>
        </div>
  
        <div className="footer-columns">
          <div className="footer-column">
            <h4>Contact</h4>
            <p>328 Queensberry Street, North Melbourne VIC3051</p>
            <p>Australia</p>
            <a href="mailto:hi@viatours.com">hi@viatours.com</a>
          </div>
          <div className="footer-column">
            <h4>Company</h4>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Tour Reviews</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Travel Guides</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Support</h4>
            <ul>
              <li><a href="#">Get in Touch</a></li>
              <li><a href="#">Help center</a></li>
              <li><a href="#">Live chat</a></li>
              <li><a href="#">How it works</a></li>
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
  )
}

export default Footer