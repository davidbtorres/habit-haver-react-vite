import React from "react";
import Navbar from "./Navbar";
import "./css/Navbar.css";

interface HomePageProps {
  currentUser: User;
}

const HomePage: React.FC<HomePageProps> = ({ currentUser }) => {
  return (
    <div>
      <Navbar />
      <h3>Welcome {currentUser.displayName}</h3>
    </div>
  );
};

export default HomePage;
