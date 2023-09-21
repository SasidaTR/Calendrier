import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <div>
        // logo
      </div>
      <div>
        <ul>
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/">La Ruche</Link></li>
          <li><Link to="/">Prestations</Link></li>
          <li><Link to="/">Tarifs</Link></li>
          <li><Link to="/">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
