import React from "react";
import '../stylesheet/Header.css'

function Header() {
    return (
        <header className="header">
          <div className="container">
            <h1>Hi, I'm <span className="highlight">Your Name</span></h1>
            <p>A Frontend Developer passionate about creating amazing user experiences.</p>
            <button>Learn More</button>
          </div>
        </header>
      );
}

export default Header;