import React from 'react';
import '../stylesheet/Navbar.css';

function NavBar() {
    return (
        <nav className="navbar">
          <div className="container">
            <h1 className="logo">MyPortfolio</h1>
            <ul className="nav-links">
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </nav>
      );
}

export default NavBar;