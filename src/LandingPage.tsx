import React from "react";
import { Link } from "react-router-dom";
import "./css/LandingPage.css";

const LandingPage: React.FC = () => {
  return (
    <div className="landing-page-container">
      <nav className="navbar">
        <div className="navbar-brand">
          <Link to="/">HabitHaver</Link>
        </div>
        <ul className="navbar-links">
          <li>
            <Link to="/signin">Sign In</Link>
          </li>
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
        </ul>
      </nav>
      <div className="landing-page-hero">
        <h1>Build and Track Habits</h1>
        <p>
          The only habit tracking app you will ever need. Get started now, for
          free.
        </p>
        <button>Try HabitHaver Free</button>
      </div>
    </div>
  );
};

export default LandingPage;
