import React from 'react'
import './ExploreCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong, faCheck, faClock, faLocationDot, faStar, faTag } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'

function ExploreCard({img}) {
  return (
    <div className="explore-card">
         <div className="card mb-3 p-2" >
            <div className="row g-0">
              <div className="col-md-3 position-relative">
                <img
                  src={img}
                  className="img-fluid h-100"
                  alt="trip img"
                />
                <span className="card-offer">20 % OFF</span>
                <span className="love">
                  <i className="fa-regular fa-heart">
                  </i>
                  <FontAwesomeIcon icon={faHeart} />

                  </span>
              </div>
              <div className="col-md-5">
                <div className="card-body">
                  <div className="d-flex align-items-baseline">
                    <FontAwesomeIcon icon={faLocationDot} className='text-color me-2'/>

                    <p>paris,france</p>
                  </div>
                  <h5 className="card-title text-capitalize text-color">
                    phi phi islands adventure day trip with seaview lunch
                    by V.marine tour
                  </h5>
                  <div>
                    <FontAwesomeIcon icon={faStar} className='me-1 star-icon'/>
                    <FontAwesomeIcon icon={faStar} className='me-1 star-icon'/>
                    <FontAwesomeIcon icon={faStar} className='me-1 star-icon'/>
                    <FontAwesomeIcon icon={faStar} className='me-1 star-icon'/>
                    <FontAwesomeIcon icon={faStar} className='me-1 star-icon'/>


                    <span className='ms-1'>4.8 ( 269 )</span>
                  </div>
                  <p className="card-text text-color">
                    This is a wider card with supporting text below as a
                    natural lead-in to additional content. This content is
                    a little bit longer.
                  </p>
                  <div class="d-flex justify-content-between features">
                    <p>
                      <FontAwesomeIcon icon={faTag} className='me-2'/>
                      best price
                      guarnatee
                    </p>
                    <p>
                    <FontAwesomeIcon icon={faCheck} className='me-2'/>
                      free cancellation
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card-body h-100">
                  <div className="flex-wrapper">
                      <div className="duration ">
                          <p>
                          <FontAwesomeIcon icon={faClock} className='me-1'/>

                          
                            2 days 1 nights
                          </p>
                        </div>
                        <div className="price-details">
                            <del>$1200</del>
                            <p className="text-color text-capitalize">from <span className="price">$114</span> </p>
                            <button className="btn details-btn">
                          
                                  view details
                                  <i className="fa-solid fa-arrow-right-long"></i>
                                  <FontAwesomeIcon icon={faArrowRightLong} className='arrow-icon'/>

                            
                            </button>
                        </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </div>
  )
}

export default ExploreCard