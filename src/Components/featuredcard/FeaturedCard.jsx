import React from "react";
import "./FeaturedCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faHeart, faClock } from "@fortawesome/free-regular-svg-icons";

function FeaturedCard({ img }) {
  return (
    <div className="featured-card-container">
      <div className="card">
        <img src={img} className="card-img-top " alt="trip img" />

        <div className="card-body">
          <FontAwesomeIcon icon={faHeart} className="" />
          <div className="header">
            <FontAwesomeIcon icon={faLocationDot} className="me-2" />
            <span>paris, france</span>
          </div>
          <p className="text-capitalize">
            centipede tour - guided arizona desert tour by atv
          </p>
          <div className="rating">
            <i className="fa-solid fa-star"></i>
            <FontAwesomeIcon icon={faStar} className="star-icon" />
            <FontAwesomeIcon icon={faStar} className="star-icon" />
            <FontAwesomeIcon icon={faStar} className="star-icon" />
            <FontAwesomeIcon icon={faStar} className="star-icon" />
            <FontAwesomeIcon icon={faStar} className="star-icon" />

            <span className="mx-2">4.8 (243)</span>
          </div>
          <div className="d-flex justify-content-between align-items-baseline trip-info">
            <div>
              <i className="fa-regular fa-clock"></i>
              <FontAwesomeIcon icon={faClock} className="me-2" />
              <span>4 days</span>
            </div>
            <div>
              <p className="text-capitalize">from $189.24</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedCard;
