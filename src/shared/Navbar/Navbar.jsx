import React from "react";
import './Navbar.css'
import { NavLink } from "react-router-dom";
import logoImg from'../../assets/images/home-page/logo-1.svg'
function Navbar() {
  return (
    <header>
      <div className="container">
        <div className="logo">
          <img src={logoImg} alt="logo img"/>
        </div>
        <nav>
          <ul>
            <li>
              <a className="active">
                <NavLink to="/">Home </NavLink>
                
                </a>
            </li>
            <li>
              <a >
              <NavLink to="explore">Tours </NavLink>
                
              </a>
            </li>
            <li>
              <a >
              <NavLink to="postcomment">Destination </NavLink>
                
                </a>
            </li>
            <li>
              <a >
              <NavLink to="blog">Blogs </NavLink>

                
                </a>
            </li>
            <li>
              <a >
                <NavLink to="booking">Booking </NavLink>
               
              </a>
            </li>
            <li>
              <a >
                <NavLink to="map">Map </NavLink>

                
                </a>
            </li>
          </ul>
        </nav>
        <div className="auth">
          <a>SignUp</a>
            <NavLink to='login'>
              <a  className="login">
                LogIn
              </a>
            </NavLink>
        </div>
        <div className="menu-toggle">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
