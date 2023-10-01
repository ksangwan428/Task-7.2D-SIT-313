import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Navbar.css'; // Import a separate CSS file for Navbar styling

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/">Home</Link> {/* Link to the home page */}
        </li>
        <li className="navbar-item">
          <Link to="/post">Post</Link> {/* Link to the post page */}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;