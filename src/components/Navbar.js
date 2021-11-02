import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <header>
        <h1>
          <Link to="/books" className="header-link">Bookstore CMS</Link>
        </h1>
      </header>
      <ul className="nav-list">
        <li>
          <Link to="/books" className="link">BOOKS</Link>
        </li>
        <li>
          <Link to="/categories" className="link">CATEGORIES</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
