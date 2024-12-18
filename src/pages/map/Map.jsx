import React from "react";
import "./Map.css";

function Map() {
  return (
    <div className="map-section">
      <div className="map-section__container">
        {/* Embedded Google Map */}
        <div className="map-section__map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d27291.670830020783!2d30.008725899999998!3d31.2357186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sar!2seg!4v1733692510374!5m2!1sar!2seg"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="map-section__map-iframe"
          ></iframe>
        </div>

        {/* Contact Information Section */}
        <div className="map-section__contact-info">
          <div className="map-section__regions">
            <div className="map-section__region">
              <h2>North America</h2>
              <p>123 Example St, City, State, ZIP</p>
              <p>1-800-123-4567</p>
            </div>
            <div className="map-section__region">
              <h2>Australia</h2>
              <p>456 Sample Rd, Melbourne, VIC</p>
              <p>1-800-765-4321</p>
            </div>
            <div className="map-section__region">
              <h2>Europe</h2>
              <p>789 Test Ave, London, UK</p>
              <p>1-800-987-6543</p>
            </div>
            <div className="map-section__region">
              <h2>Asia</h2>
              <p>321 Demo Blvd, Tokyo, Japan</p>
              <p>1-800-543-2109</p>
            </div>
          </div>
          <div className="map-section__leave-info">
            <form>
              <h2>Leave us your info</h2>
              <input
                type="text"
                placeholder="Name"
                className="map-section__input"
                required
              />
              <input
                type="email"
                placeholder="Email"
                className="map-section__input"
                required
              />
              <textarea
                placeholder="Message"
                rows="4"
                className="map-section__textarea"
                required
              ></textarea>
              <button type="submit" className="map-section__submit-btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Map;
