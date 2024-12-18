import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'; // Import Link from react-router-dom


function LoginPage() {
  return (
    <div className="login-page">

      <div className="login-container">
        <h1 className="login-title">Log In</h1>
        <p className="login-subtitle">We're glad to see you again!</p>
        <p className="signup-link">Don't have an account? <Link to="/signup">Sign Up!</Link></p>

        <form className="login-form">
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" placeholder="Enter your email" required />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter your password" required />
          </div>

          <div className="form-options">
            <label>
              <input type="checkbox" />
              Remember me
            </label>
            <Link to="/forgot-password" className="forgot-password">Lost your password?</Link>
          </div>

          <button type="submit" className="login-button">
            Log In <i className="fas fa-arrow-right"></i>
          </button>

          <p className="divider">OR</p>

          <div className="social-login">
            <button className="social-button facebook">
              <i className="fab fa-facebook-f"></i> Continue Facebook
            </button>
            <button className="social-button google">
              <i className="fab fa-google"></i> Continue Google
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
