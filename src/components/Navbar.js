import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <div className="logo-container">
        <img
          className="logo-nav"
          src="images/bees-ness.png"
          alt="logo bees⋅ness"
        />
      </div>
      <ul className="nav-link-container">
        <li className="nav">
          <Link to="/">Accueil</Link>
        </li>
        <li>
          <Link to="/">La Ruche</Link>
        </li>
        <li>
          <Link to="/">Prestations</Link>
        </li>
        <li>
          <Link to="/">Tarifs</Link>
        </li>
        <li>
          <Link to="/">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
