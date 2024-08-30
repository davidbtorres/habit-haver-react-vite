import React from "react";
import { Link } from "react-router-dom";
import "./css/LandingPage.css";

const LandingPage: React.FC = () => {
  return (
    <div>
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
      <h1>Welcome</h1>
    </div>
  );
};

export default LandingPage;
