import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav class="navbar">
      <div class="nav-left">
        <a href="/" class="name-btn"><i>Ahmad Bilal</i></a>
      </div>
      <div class="nav-right">
        <a href="/">Home</a>
        <a href="#about">About</a>
        <a href="#eductaion">Education</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
    </div>
  )
}

export default Navbar
