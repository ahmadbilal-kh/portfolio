import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="section-glow-end"></div>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-logo">
            <button className="logo-button">
              <a href="/">Ahmad Bilal</a>
            </button>
          </div>
          <div className="footer-columns">
            <div className="footer-column">
              <h3>Navigation</h3>
              <ul>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
                <li>
                  <a href="#projects">Projects</a>
                </li>
                <li>
                  <a href="#home">Home</a>
                </li>
              </ul>
            </div>
            <div className="footer-column">
              <h3>Social</h3>
              <ul>
                <li>
                  <a
                    href="https://web.facebook.com/profile.php?id=61555792959559"
                    target="_blank"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/ahmad-bilal-2b740a2b6/"
                    target="_blank"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="https://github.com/ahmadbilal-kh" target="_blank">
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-column">
              <h3>Contact</h3>
              <ul>
                <li>
                  <a href="mailto:youremail@example.com">
                    ahmad.bilal.kh046@gamil.com
                  </a>
                </li>
                <li>
                  <a href="tel:+1234567890">+92 321 884 443</a>
                </li>
              </ul>
            </div>
            <div className="footer-column">
              <h3>Services</h3>
              <ul>
                <li>Web Development</li>
                <li>Software Development</li>
                <li>E-commerce Store</li>
                <li>Portfolio Websites</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 Ahmad Bilal. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
