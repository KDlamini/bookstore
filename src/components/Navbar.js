import React from 'react';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <header>
        <h1>Bookstore CMS</h1>
      </header>
      <ul className="nav-list">
        <li>BOOKS</li>
        <li>CATEGORIES</li>
      </ul>
    </nav>
  );
}

export default Navbar;
