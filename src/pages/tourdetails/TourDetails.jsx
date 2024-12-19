import React, { useState } from "react";
import './TourDetails.css';
import { Link } from "react-router-dom";
import image1 from '../../assets/images/tour-details/image-1.jpg';
import image2 from '../../assets/images/tour-details/image-2.jpg';
import image3 from '../../assets/images/tour-details/image-3.jpg';
import image4 from '../../assets/images/tour-details/image-4.jpg';
import image5 from '../../assets/images/tour-details/image-5.jpg';
import image6 from '../../assets/images/tour-details/image-6.jpg';
import image10 from '../../assets/images/tour-details/image-10.jpg';
import image7 from '../../assets/images/tour-details/photo-7.jpg';
import image8 from '../../assets/images/tour-details/photo-8.jpg';
import image9 from '../../assets/images/tour-details/photo-9.jpg';

function TourDetails() {
  const [ticketCounts, setTicketCounts] = useState({
    adult: 0,
    youth: 0,
    children: 0,
  });

  const ticketPrices = {
    adult: 282,
    youth: 168,
    children: 80,
  };

  const updateTicketCount = (type, increment) => {
    setTicketCounts((prevCounts) => ({
      ...prevCounts,
      [type]: Math.max(prevCounts[type] + increment, 0),
    }));
  };

  const bookNow = (event) => {
    event.preventDefault(); // Prevent form submission default behavior
    console.log("Booking initiated");
  };

  const calculateTotalPrice = () => {
    return (
      ticketCounts.adult * ticketPrices.adult +
      ticketCounts.youth * ticketPrices.youth +
      ticketCounts.children * ticketPrices.children
    );
  };

  return (
    <main className="main-content">
      <div className="container">
        <div className="breadcrumb">
          <Link to="/">Home</Link> / 
          <Link to="/tours">Tours</Link> / 
          <span>Westminster Walking Tour</span>
        </div>
        <div className="theBest">The 10 Best London Tours & Excursions</div>
        <div className="tags">
          <span className="tag bestseller">Bestseller</span>
          <span className="tag free-cancellation">Free cancellation</span>
        </div>
        <h1 className="title">
          Westminster Walking Tour & Westminster Abbey Entry
        </h1>
        <div className="ratings">
          ⭐⭐⭐⭐⭐ <span className="rating-number">4.8</span> (<span>243</span>){" "}
          <span className="location">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-geo-alt-fill"
              viewBox="0 0 16 16"
            >
              <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
            </svg>{" "}
            London, UK
          </span>
          <span className="booked">30K+ booked</span>
          <div className="actions">
            <button className="wishlist">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-heart"
                viewBox="0 0 16 16"
              >
                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.922 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01z" />
              </svg>{" "}
              Wishlist
            </button>
            <button className="share">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-box-arrow-up-right"
                viewBox="0 0 16 16"
              >
                <path d="M8.636 3.5a.5.5 0 0 0-.222-.764H4.828a2 2 0 0 0-1.985 2.514V10.428a2 2 0 0 0 1.999 1.955H14a1 1 0 0 0 1-1V7.396a4 4 0 1 0-4.253-4.698L8.36 3.5z" />
              </svg>{" "}
              Share
            </button>
          </div>
        </div>
        <section className="image-grid">
          <div className="main-image">
            <img src={image1} alt="Main" loading="lazy"/>
          </div>
          <div className="side-images">
            <img src={image2} alt="Image 2" loading="lazy" />
            <img src={image3} alt="Image 3" loading="lazy"/>
          </div>
          <button className="see-photos">See all photos</button>
        </section>
        <section className="tour-info">
          <h2>Tour Overview</h2>
          <p>
            Join this Westminster walking tour to learn more about the history
            and role Westminster plays in British politics.
          </p>
          <h2>Tour Highlights</h2>
          <ul>
            <li>Visit the iconic Westminster Abbey</li>
            <li>Learn about British political history</li>
          </ul>
        </section>
        <div className="included-services">
          <h2>What's Included</h2>
          <ul>
            <li>Beverages</li>
            <li>Local taxes</li>
          </ul>
        </div>
        <div className="container">
          <div className="row">
            {/* Booking Form */}
            <div className="col-lg-8">
              <section>
                <form onSubmit={bookNow}>
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <input type="text" className="form-control" placeholder="Name" required />
                    </div>
                    <div className="form-group col-md-6">
                      <input type="email" className="form-control" placeholder="Email" required />
                    </div>
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Title" required />
                  </div>
                  <div className="form-group">
                    <textarea className="form-control" rows="4" placeholder="Comment" required></textarea>
                  </div>
                  <button type="submit" className="btn-custom">
                    Post Comment
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-arrow-up-right"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"
                      />
                    </svg>
                  </button>
                </form>
              </section>
            </div>

            {/* Side Menu */}
            <div className="col-lg-4">
              <div className="booking-side-menu">
                <h4>Total Price: ${calculateTotalPrice()}</h4>

                {/* Date Selection */}
                <div className="mb-3">
                  <label className="form-label">
                    <i className="bi bi-calendar"></i> Select Date
                  </label>
                  <input type="date" className="form-control" />
                </div>

                {/* Time Selection */}
                <div className="mb-3">
                  <label className="form-label">
                    <i className="bi bi-clock"></i> Select Time
                  </label>
                  <select className="form-select">
                    <option>Choose a time</option>
                    <option value="8:00 AM">8:00 AM</option>
                    <option value="10:00 AM">10:00 AM</option>
                    <option value="1:00 PM">1:00 PM</option>
                  </select>
                </div>

                {/* Ticket Counter */}
                <div className="mb-3">
                  <label className="form-label">
                    <strong>Ticket Options</strong>
                  </label>
                  {["adult", "youth", "children"].map((type) => (
                    <div className="ticket-counter mb-2 " key={type}>
                      <span>
                        {type.charAt(0).toUpperCase() + type.slice(1)} (${ticketPrices[type]})
                      </span>
                      <div>
                        <button
                          className="btn btn-sm me-2"
                          onClick={() => updateTicketCount(type, -1)}
                        >
                          -
                        </button>
                        <span>{ticketCounts[type]}</span>
                        <button
                          className="btn btn-sm ms-2"
                          onClick={() => updateTicketCount(type, 1)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Additional Services */}
                <div className="mb-3">
                  <label className="form-label">
                    <strong>Add-ons</strong>
                  </label>
                  <div className="add-extra">
                    <input
                      type="checkbox"
                      id="serviceBooking"
                    />
                    <label htmlFor="serviceBooking">Add Service Booking $40</label>
                  </div>
                  <div className="add-extra">
                    <input
                      type="checkbox"
                      id="servicePerPerson"
                    />
                    <label htmlFor="servicePerPerson">
                      Add Service Per Person (Adult: $17, Youth: $14)
                    </label>
                  </div>
                  <div>
                    

                  </div>
                </div>

                {/* Book Button */}
                <button className="btn btn-primary btn-block" onClick={bookNow}>
                  Book Now
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-arrow-up-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Related Tours Section */}
          <section className="related-tours">
            <h3>You might also like...</h3>
            <div className="tour-grid">
              {["London City Tour", "Tower Bridge Experience", "Thames River Cruise"].map((tour, index) => (
                <div className="tour-card" key={index}>
                  <img src={image7} alt="Image 7" loading="lazy" />
                  <div className="tour-card-content">
                    <h3>{tour}</h3>
                    <div className="tour-card-rating">★★★★★</div>
                    <div className="tour-card-price">From $89</div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

export default TourDetails;
