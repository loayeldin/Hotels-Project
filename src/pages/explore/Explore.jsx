import React from "react";
import "./Explore.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import Filter from "../../Components/filter/Filter";
import ExploreCard from "../../Components/explorecard/ExploreCard";
import exploreimg from "../../assets/images/Blog/blog4.jpg";
import Pagination from "../../Components/pagination/Pagination";
import { Link } from "react-router-dom";
function Explore() {
  return (
    <div className="explore-container">
      <div className="explore-section my-5">
        <div className="d-flex justify-content-between flex-wrap">
          <p className="text-color">Home/Tours</p>
          <p className="text-color text-uppercase">
            the 10 best phucket tours & excursions
          </p>
        </div>
        <h1>explore all the things to do in phucket</h1>
        <button className="filter-btn btn">
          filter By
          <FontAwesomeIcon icon={faFilter} className="filter-icon" />
        </button>
        <div className="row mt-4">
          <div className="col-lg-3">
            <Filter />
          </div>

          <div className="col-lg-9">
            <div className="hotels mt-3">
              <h6 className="text-color">1323 result</h6>
              <div className="hotels-cards">
                <Link to="/details" >
                  <ExploreCard img={exploreimg} />
                </Link>

                <Link to="/details">
                  <ExploreCard img={exploreimg} />
                </Link>
                <Link to="/details">
                  <ExploreCard img={exploreimg} />
                </Link>
                <Link to="/details">
                  <ExploreCard img={exploreimg} />
                </Link>
                <Link to="/details">
                  <ExploreCard img={exploreimg} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <Pagination />
      </div>
    </div>
  );
}

export default Explore;
