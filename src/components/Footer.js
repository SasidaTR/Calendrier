import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <ul className="footer-link-container">
        <li>
          <Link to="/">Mention Légales</Link>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
