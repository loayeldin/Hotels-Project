import React from 'react';
import './Booking.css'; 
import tourImage from '../../assets/images/booking-page/photo-1.jpg';

function Booking() {
  return (
    <div>
      <main className="main-content">
        <div className="container">
          <div className="content-wrapper">
            <div className="booking-form">
              <p className="sign-in-text">
                <a href="#" className="sign-in-link">Sign in</a> to book with your saved
                details or <a href="#" className="register-link">register</a> to manage
                your bookings on the go!
              </p>
              <h1>Let us know who you are</h1>
              <form id="bookingForm">
                <div className="form-row">
                  <input
                    type="text"
                    id="fullName"
                    placeholder="Full Name"
                    required
                  />
                </div>
                <div className="form-row two-cols">
                  <input type="email" id="email" placeholder="Email" required />
                  <input
                    type="tel"
                    id="phone"
                    placeholder="Phone Number"
                    required
                  />
                </div>
                <div className="form-row two-cols">
                  <input
                    type="text"
                    id="country"
                    placeholder="Country"
                    required
                  />
                  <input type="text" id="city" placeholder="City" required />
                </div>
                <div className="form-row">
                  <input
                    type="text"
                    id="address1"
                    placeholder="Address 1"
                    required
                  />
                </div>
                <div className="form-row">
                  <input type="text" id="address2" placeholder="Address 2" />
                </div>
                <div className="form-row two-cols">
                  <input
                    type="text"
                    id="state"
                    placeholder="State/Province/Region"
                    required
                  />
                  <input
                    type="text"
                    id="zip"
                    placeholder="ZIP code/Postal code"
                    required
                  />
                </div>
                <div className="form-row">
                  <textarea
                    id="tourContent"
                    placeholder="Tour Content"
                    rows="4"
                  ></textarea>
                </div>
                <div className=" submit-form">
                  <label className="checkbox-container">
                    <input type="checkbox" required />
                    <span className="checkmark"></span>
                    <p>By proceeding with this booking, I agree to tourz Terms of Use
                    and Privacy Policy.</p>
                  </label>
                  <button type="submit" className="next-btn">
                    Next
                    <span>
                      <i className="fa-solid fa-arrow-trend-up"></i>
                    </span>
                  </button>
                </div>
              </form>
            </div>

            <div className="booking-details">
              <h2>Your booking details</h2>
              <div className="tour-card">
                <img
                  src={tourImage}
                  alt="Tour"
                  width="80"
                  height="80"
                />
                <h3>Zipline 18 Platform and ATV Adventure Tour From Phuket</h3>
              </div>
              <div className="booking-info">
                <div className="info-row">
                  <span>Date:</span>
                  <span>06 April 2023</span>
                </div>
                <div className="info-row">
                  <span>Time:</span>
                  <span>10:00 am</span>
                </div>
                <div className="info-row">
                  <span>Duration:</span>
                  <span>12 Days</span>
                </div>
                <div className="info-row">
                  <span>Tickets:</span>
                  <span>Adult x 2 = 98$</span>
                </div>
              </div>
              <div className="border"></div>
              <div className="booking-info">
                <div className="info-row">
                  <span>Service per booking:</span>
                  <span>$300.00</span>
                </div>
              </div>
              <div className="border"></div>
              <div className="promo-code-section">
                <h3>Do you have a promo code?</h3>
                <div className="promo-input">
                  <input type="text" placeholder="Promo code" />
                </div>
                <button className="apply-btn">
                  Apply
                  <span>
                    <i className="fa-solid fa-arrow-trend-up"></i>
                  </span>
                </button>
              </div>
              <button className="complete-order-btn">Complete My Order</button>
            </div>
          </div>
        </div>
      </main>
      <script src="./assets/js/script.js"></script>
    </div>
  );
}

export default Booking;
