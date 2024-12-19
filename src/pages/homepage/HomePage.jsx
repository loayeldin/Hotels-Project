import React from "react";
import "./HomePage.css";
import FeaturedCard from'../../Components/featuredcard/FeaturedCard';
import  BlogCard from '../../Components/blogcard/BlogCard'
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

import trendingimg1 from'../../assets/images/home-page/roma.jpg'
import trendingimg2 from'../../assets/images/home-page/phuket.jpg'
import trendingimg3 from'../../assets/images/home-page/bali.jpg'
import blogImg1 from'../../assets/images/Blog/luke-porter-NEqEC7qa9FM-unsplash.jpg'
import blogImg2 from'../../assets/images/Blog/blog2.jpg'
import blogImg3 from'../../assets/images/Blog/blog3.jpg'
import { Link, NavLink } from "react-router-dom";

function HomePage() {
  return (
    <>
      <section className="adventure">
        <div className="mycontainer">
          <div className="adventure-content">
            <h1>life is adventure make the best of it </h1>
            <div className="search-container">
              <div className=" d-flex">
                <FontAwesomeIcon icon={faLocationDot} className="header-icon"/>
                <div className="text-container">
                  <h6>where</h6>
                  <span>search destination</span>
                </div>
              </div>

              <div className=" d-flex">
                <FontAwesomeIcon icon={faCalendar} className="header-icon"/>

               
                <div className="text-container">
                  <h6>when</h6>
                  <span>december 05 jan</span>
                </div>
              </div>
              <div className=" d-flex">
                <FontAwesomeIcon icon={faFlag} className="header-icon"/>

               
                <div className="text-container">
                  <h6>tour type</h6>
                  <span>all tour</span>
                </div>
              </div>

              <div className=" d-flex">
                
                <FontAwesomeIcon icon={faSearch} className="header-icon fa-search"/>

              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="popular">
      <div className="mycontainer">
        <div className="d-flex justify-content-between align-items-center">
          <h2>popular things to do</h2>
          <div >
          
          <Link to="/explore">
                <span  span>see all</span>
                <FontAwesomeIcon icon={faArrowRightLong} className="popular-icon"/>
              
             </Link>
           
          </div>
        </div>
        <div className="row mycard">
          <div className="col-lg-4 col-md-4 position-relative h-100 responsive-card"  >
            <Link to="/details">
              <img src={popularimg1} alt="img" loading="lazy"/>
              <span className="label-text text-capitalize"> cruises</span>
            </Link>
          </div>
          <div className="col-lg-8 col-md-8 ">
            <div className="row g-3" >
              <div className="col-lg-4 col-md-6 position-relative" >
                <Link to="/details">
                  <img src={popularimg4} className="img-card" loading="lazy"  alt="img"/>
                <span className="label-text text-capitalize"> beach tours</span>
                </Link>
              </div>
              <div className="col-lg-8 col-md-6 position-relative">
                <Link to="/details">
                  <img src={popularimg3} className="img-card" loading="lazy"  alt="img"/>
                  <span className="label-text text-capitalize"> city tours</span>
                </Link>
              </div>
              <div className="col-lg-4 col-md-4 position-relative">
                <Link to="/details">
                  <img src={popularimg2} className="img-card" loading="lazy" alt="img"/>
                  <span className="label-text text-capitalize"> museum tour</span>
                </Link>
              </div>
              <div className="col-lg-3 col-md-4 position-relative">
                <Link to="/details">
                  <img src={popularimg5} className="img-card" loading="lazy" alt="img"/>
                  <span className="label-text text-capitalize"> food</span>
                </Link>
              </div>
              <div className="col-lg-5 col-md-4 position-relative">
                <Link to="/details">
                  <img src={popularimg6} className="img-card" loading="lazy" alt="img"/>
                  <span className="label-text text-capitalize"> hiking</span>
                </Link>
              </div>
              
            </div>
            
          </div>
        </div>
      </div>
      </section>

      <section className="tourZ">
      <div className="mycontainer">
        <h2 className="text-capitalize tourz-header">why choose tourz </h2>
        <div className="row">
          <div className="col-lg-3 col-md-6 p-4"  > 
            <FontAwesomeIcon icon={faMoneyBill1Wave} className="tourz-icon"/>
            <h4>ultimate flexibility</h4>
            <p>
              you are in control with free cancellation 
              and payment options to satisfy any plant or budget
            </p>
          </div>

          <div className="col-lg-3 col-md-6 p-4">
            <FontAwesomeIcon icon={faFilm} className="tourz-icon"/>
        
            <h4>memorable experiences</h4>
            <p>
             brose and book tours and activites so incredible, 
             you will want to tell your friends.
            </p>
          </div>

          <div class="col-lg-3 col-md-6 p-4">
            <FontAwesomeIcon icon={faGem} className="tourz-icon"/>
            <h4>quality at our core</h4>
            <p>
              you are in control with free cancellation 
              and payment options to satisfy any plant or budget
            </p>
          </div>

          <div className="col-lg-3 col-md-6 p-4">
            
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
      <section className="featured">
        <div className="mycontainer">
          <div className="d-flex justify-content-between align-items-center">
            <h2>featured trips</h2>
            <div>
             <Link to="/explore">
                <span  span>see all</span>
                <FontAwesomeIcon icon={faArrowRightLong} className="popular-icon"/>
              
             </Link>
            </div>
          </div>
          <div class="row g-4">
            <div class="col-xl-3 col-lg-4 col-md-6">
              <Link to="/details">
                <FeaturedCard img={popularimg2}/>
              </Link>
        
            </div>
            <div class="col-xl-3 col-lg-4 col-md-6">
              
            <Link to="/details">
                <FeaturedCard img={featureImg5}/>
              </Link>
          
            </div>

            <div class="col-xl-3 col-lg-4 col-md-6">
            
            <Link to="/details">
                <FeaturedCard img={featureImg1}/>
              </Link>
            
        
            </div>

            <div className="col-xl-3 col-lg-4 col-md-6">
          
            <Link to="/details">
                <FeaturedCard img={featureImg2}/>
              </Link>
            
              
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
            <Link to="/details">
                <FeaturedCard img={featureImg3}/>
              </Link>
            </div>

            <div className="col-xl-3 col-lg-4 col-md-6">
            <Link to="/details">
                <FeaturedCard img={featureImg4}/>
              </Link>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
          
            <Link to="/details">
                <FeaturedCard img={featureImg5}/>
              </Link>
          
            </div>

            <div className="col-xl-3 col-lg-4 col-md-6">
            <Link to="/details">
                <FeaturedCard img={featureImg6}/>
              </Link>

            </div>
            
          </div>
        </div>
      </section>

      <section className="trending">
      <div className="mycontainer">
        <div className="d-flex justify-content-between align-items-center">
          <h2>trending destinations</h2>
          <div>
          
          <Link to="/explore">
                <span  span>see all</span>
                <FontAwesomeIcon icon={faArrowRightLong} className="popular-icon"/>
              
             </Link>
        
          </div>
        </div>
        <div className="row my-3 g-3">
          <div className="col-lg-3 col-md-6">
           <div className="card-img">
              <Link to="/explore">
                <img  className="w-100 h-100" src={popularimg1} alt="trend img"/>
                <div className="label-text">
                  <h4 className="text-capitalize">paris</h4>
                  <span className="text-capitalize">100+ Tours</span>
                </div>
              </Link>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="card-img">
               <Link to="/explore">
                <img  className="w-100 h-100" src={trendingimg1}  alt="trend img"/>
                <div className="label-text">
                  <h4 className="text-capitalize">roma</h4>
                  <span className="text-capitalize">100+ Tours</span>
                </div>
               </Link>
             </div>
           </div>
           <div className="col-lg-3 col-md-6">
            <div className="card-img">
              <Link to="/explore">
                <img  className="w-100 h-100" src={trendingimg2}  alt="trend img"/>
                <div className="label-text">
                  <h4 className="text-capitalize">phuket</h4>
                  <span className="text-capitalize">100+ Tours</span>
                </div>
              </Link>
             </div>
           </div>
           <div className="col-lg-3 col-md-6">
            <div className="card-img">
               <Link to="/explore">
                <img  className="w-100 h-100" src={trendingimg3}  alt="trend img"/>
                <div className="label-text">
                  <h4 className="text-capitalize">bali</h4>
                  <span className="text-capitalize">100+ Tours</span>
                </div>
               </Link>
             </div>
           </div>

        </div>
      </div>
     </section>

     <section className="articles">
      <div className="mycontainer">
        <div className="d-flex justify-content-between align-items-center">
          <h2>travel articles</h2>
          <div>
          <Link to="/blog">
                <span  span>see all</span>
                <FontAwesomeIcon icon={faArrowRightLong} className="popular-icon"/>
              
             </Link>
          </div>
        </div>
        <div className="row my-4">
          <div className="col-lg-4 col-md-6 mb-4">
              <Link to="/blog">
                <BlogCard img={blogImg1}/>
              </Link>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
          <Link to="/blog">
                <BlogCard img={blogImg2}/>
              </Link>
         
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
          <Link to="/blog">
                <BlogCard img={blogImg3}/>
              </Link>
          
          </div>
        </div>
      </div>
    </section>

    <section className="offer">
      <div className="mycontainer">
          <div className="offer-content ">
            <h2 className="text-capitalize">
              Get 5% off your 1st app booking
            </h2>
            <p>booking's better on the app . use promo code <br/> "TourBooking" to save !</p>
            <p>Get a magic link sent to your email</p>
            <div className="d-flex justify-content-between" >
              <input type="text" className="form-control" placeholder="email"/>
              <button className="btn send-btn ms-4 d-flex align-items-center">
                 send
                 <FontAwesomeIcon icon={faArrowRightLong} className="offer-icon"/>

                </button>
            </div>
          </div>
        </div>
    </section>
      
    </>
  );
}

export default HomePage;
