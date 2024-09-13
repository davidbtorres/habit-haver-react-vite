import React from "react";
import "./css/Navbar.css";
import { Link } from "react-router-dom";

interface HomePageProps {
  currentUser: User;
}

const HomePage: React.FC<HomePageProps> = ({ currentUser }) => {
  return (
    <div>
      <nav>
        <div className="navbar-brand">
          <Link to="/">HabitHaver</Link>
        </div>
        <ul className="navbar-links">
          <li>
            <Link to="/">{currentUser.displayName}</Link>
          </li>
          <li>
            <Link to="/signup">Sign Out</Link>
          </li>
        </ul>
      </nav>
      <h3>Welcome {currentUser.displayName}</h3>
    </div>
  );
};

export default HomePage;
