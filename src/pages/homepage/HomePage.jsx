import React from "react";
import "./HomePage.css";
import FeaturedCard from'../../Components/featuredcard/FeaturedCard';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faArrowRightLong, faCalendar, faFilm, faFlag, faGem, faLocationDot, faMedal, faMoneyBill1Wave, faSearch } from "@fortawesome/free-solid-svg-icons";
import popularimg1 from '../../assets/images/home-page/popular4.jpg'
import popularimg2 from '../../assets/images/home-page/popular1.jpg'
import popularimg3 from '../../assets/images/home-page/popular7.jpg'

import popularimg4 from '../../assets/images/home-page/popular3jpg'
import popularimg5 from '../../assets/images/home-page/popular5.jpg'
import popularimg6 from '../../assets/images/home-page/popular6.jpg'
import featureImg1 from '../../assets/images/Blog/blog3.jpg'
import featureImg2 from '../../assets/images/Blog/blog4.jpg'
import featureImg3 from '../../assets/images/Blog/blog5.jpg'
import featureImg4 from '../../assets/images/Blog/blog7.jpg'
import featureImg5 from '../../assets/images/Blog/blog8.jpg'
import featureImg6 from '../../assets/images/Blog/blog9.jpg'



function HomePage() {
  return (
    <>
      <section class="adventure">
        <div class="mycontainer">
          <div class="adventure-content">
            <h1>life is adventure make the best of it </h1>
            <div class="search-container">
              <div class=" d-flex">
                <FontAwesomeIcon icon={faLocationDot} className="header-icon"/>
                <div class="text-container">
                  <h6>where</h6>
                  <span>search destination</span>
                </div>
              </div>

              <div class=" d-flex">
                <FontAwesomeIcon icon={faCalendar} className="header-icon"/>

               
                <div class="text-container">
                  <h6>when</h6>
                  <span>december 05 jan</span>
                </div>
              </div>
              <div class=" d-flex">
                <FontAwesomeIcon icon={faFlag} className="header-icon"/>

               
                <div class="text-container">
                  <h6>tour type</h6>
                  <span>all tour</span>
                </div>
              </div>

              <div class=" d-flex">
                
                <FontAwesomeIcon icon={faSearch} className="header-icon fa-search"/>

              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="popular">
      <div class="mycontainer">
        <div class="d-flex justify-content-between align-items-center">
          <h2>popular things to do</h2>
          <div >
          
              <span>see all</span>
            
              <FontAwesomeIcon icon={faArrowRightLong} className="popular-icon"/>
           
          </div>
        </div>
        <div class="row mycard">
          <div class="col-lg-4 col-md-4 position-relative h-100 responsive-card"  >
            <a href="tour-details.html">
              <img src={popularimg1} alt="img"/>
              <span class="label-text text-capitalize"> cruises</span>
            </a>
          </div>
          <div class="col-lg-8 col-md-8 ">
            <div class="row g-3" >
              <div class="col-lg-4 col-md-6 position-relative" >
                <a href="tour-details.html">
                  <img src={popularimg4} class="img-card"  alt="img"/>
                <span class="label-text text-capitalize"> beach tours</span>
                </a>
              </div>
              <div class="col-lg-8 col-md-6 position-relative">
                <a href="tour-details.html">
                  <img src={popularimg3} class="img-card"  alt="img"/>
                  <span class="label-text text-capitalize"> city tours</span>
                </a>
              </div>
              <div class="col-lg-4 col-md-4 position-relative">
                <a href="tour-details.html">
                  <img src={popularimg2} class="img-card" alt="img"/>
                  <span class="label-text text-capitalize"> museum tour</span>
                </a>
              </div>
              <div class="col-lg-3 col-md-4 position-relative">
                <a href="./tour-details.html">
                  <img src={popularimg5} class="img-card" alt="img"/>
                  <span class="label-text text-capitalize"> food</span>
                </a>
              </div>
              <div class="col-lg-5 col-md-4 position-relative">
                <a href="tour-details.html">
                  <img src={popularimg6} class="img-card" alt="img"/>
                  <span class="label-text text-capitalize"> hiking</span>
                </a>
              </div>
              
            </div>
            
          </div>
        </div>
      </div>
      </section>

      <section class="tourZ">
      <div class="mycontainer">
        <h2 class="text-capitalize tourz-header">why choose tourz </h2>
        <div class="row">
          <div class="col-lg-3 col-md-6 p-4"  > 
            {/* <i class="fa-solid fa-money-bill-1-wave"></i> */}
            <FontAwesomeIcon icon={faMoneyBill1Wave} className="tourz-icon"/>
            <h4>ultimate flexibility</h4>
            <p>
              you are in control with free cancellation 
              and payment options to satisfy any plant or budget
            </p>
          </div>

          <div class="col-lg-3 col-md-6 p-4">
            {/* <i class="fa-solid fa-film"></i> */}
            <FontAwesomeIcon icon={faFilm} className="tourz-icon"/>
        
            <h4>memorable experiences</h4>
            <p>
             brose and book tours and activites so incredible, 
             you will want to tell your friends.
            </p>
          </div>

          <div class="col-lg-3 col-md-6 p-4">
            <FontAwesomeIcon icon={faGem} className="tourz-icon"/>
            {/* <i class="fa-regular fa-gem"></i> */}
            <h4>quality at our core</h4>
            <p>
              you are in control with free cancellation 
              and payment options to satisfy any plant or budget
            </p>
          </div>

          <div class="col-lg-3 col-md-6 p-4">
            
            {/* <i class="fa-solid fa-medal"></i> */}
            <FontAwesomeIcon icon={faMedal} className="tourz-icon"/>
            <h4>award-winning support</h4>
            <p>
              you are in control with free cancellation 
              and payment options to satisfy any plant or budget
            </p>
          </div>


        </div>
      </div>
    </section>
    <section class="featured">
      <div class="mycontainer">
        <div class="d-flex justify-content-between align-items-center">
          <h2>featured trips</h2>
          <div>
            <span>see all</span>
            <FontAwesomeIcon icon={faArrowRightLong} className="popular-icon"/>
            
          </div>
        </div>
        <div class="row g-4">
          <div class="col-xl-3 col-lg-4 col-md-6">
            <FeaturedCard img={popularimg2}/>
      
          </div>
          <div class="col-xl-3 col-lg-4 col-md-6">
            
            <FeaturedCard img={popularimg5}/>
        
          </div>

          <div class="col-xl-3 col-lg-4 col-md-6">
          
              <FeaturedCard img={featureImg1}/>
          
       
          </div>

          <div class="col-xl-3 col-lg-4 col-md-6">
         
            <FeaturedCard img={featureImg2}/>
           
            
          </div>
          <div class="col-xl-3 col-lg-4 col-md-6">
            <FeaturedCard img={featureImg3}/>
          </div>

          <div class="col-xl-3 col-lg-4 col-md-6">
            <FeaturedCard img={featureImg4}/>
          </div>
          <div class="col-xl-3 col-lg-4 col-md-6">
         
            <FeaturedCard img={featureImg5}/>
        
          </div>

          <div class="col-xl-3 col-lg-4 col-md-6">
            <FeaturedCard img={featureImg6}/>

          </div>
          
        </div>
      </div>
    </section>
      
    </>
  );
}

export default HomePage;
