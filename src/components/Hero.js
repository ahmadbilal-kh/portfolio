import React from "react";
import Image from "../components/images/ahmad.jpg";

const Hero = () => {
  return (
    <div>
      <section className="hero">
        <div className="hero-left">
          <h1>
            Hi, I'm <span className="glow-name">Ahmad Bilal</span>
          </h1>

          <p>I'm a passinate Web Developer. Lets build something together!</p>
          <button className="btn">
            <a href="#contact">Contact Me</a>
          </button>
        </div>

        <div className="hero-right">
          <img src={Image} alt="" />
        </div>
      </section>
    </div>
  );
};

export default Hero;
