import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = () => {
    setMenuOpen(false); // Close the menu when a link is clicked
  };

  return (
    <nav className="navbar">
      <div className="nav-left">
        <a href="/" className="name-btn">
          <i>Ahmad Bilal</i>
        </a>
      </div>

      <div className="menu-icon" onClick={toggleMenu}>
        ☰
      </div>

      <div className={`nav-right ${menuOpen ? "active" : ""}`}>
        <a href="/" onClick={handleLinkClick}>
          Home
        </a>
        <a href="#about" onClick={handleLinkClick}>
          About
        </a>
        <a href="#education" onClick={handleLinkClick}>
          Education
        </a>
        <a href="#skills" onClick={handleLinkClick}>
          Skills
        </a>
        <a href="#projects" onClick={handleLinkClick}>
          Projects
        </a>
        <a href="#services" onClick={handleLinkClick}>
          Services
        </a>
        <a href="#contact" onClick={handleLinkClick}>
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
