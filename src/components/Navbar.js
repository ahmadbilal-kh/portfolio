import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
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
        <a href="/">Home</a>
        <a href="#about">About</a>
        <a href="#education">Education</a> {/* 🔧 fixed typo */}
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
