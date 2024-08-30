import React from "react";
import { Link } from "react-router-dom";
import "./css/navbar.css";

// type NavbarProps = {
//   onCartButtonClick: () => void
//   cartCount: number
// }

function Navbar() {
  return (
    <nav>
      <div className="ml-4 font-extrabold text-xl">
        <Link to={"/"}>HabitHaver</Link>
      </div>
      <div>
        <Link to="/signin">
          <p>sign out</p>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
