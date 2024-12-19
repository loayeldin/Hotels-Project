import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

function LoginPage() {
  return (
    <div className="login-page-container">
      <div className="login-page-content">
        <h1 className="login-page-title">Log In</h1>
        <p className="login-page-subtitle">We're glad to see you again!</p>
        <p className="login-page-signup-link">
          Don't have an account? <Link to="/signup">Sign Up!</Link>
        </p>

        <form className="login-page-form">
          <div className="login-page-form-group">
            <label htmlFor="email" className="login-page-form-label">Email Address</label>
            <input
              type="email"
              id="email"
              className="login-page-form-input"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="login-page-form-group">
            <label htmlFor="password" className="login-page-form-label">Password</label>
            <input
              type="password"
              id="password"
              className="login-page-form-input"
              placeholder="Enter your password"
              required
            />
          </div>

          <div className="login-page-form-options">
            <label className="login-page-remember-me">
              <input type="checkbox" className="login-page-checkbox" />
              Remember me
            </label>
            <Link to="/forgot-password" className="login-page-forgot-password">
              Lost your password?
            </Link>
          </div>

          <button type="submit" className="login-page-button">
            Log In <i className="fas fa-arrow-right"></i>
          </button>

          <p className="login-page-divider">OR</p>

          <div className="login-page-social-login">
            <button className="login-page-social-button login-page-facebook">
              <i className="fab fa-facebook-f"></i> Continue with Facebook
            </button>
            <button className="login-page-social-button login-page-google">
              <i className="fab fa-google"></i> Continue with Google
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;