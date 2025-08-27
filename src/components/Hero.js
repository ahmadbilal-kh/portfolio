import React, { useEffect, useState } from "react";
import Image from "../components/images/ahmad.jpg";

const Hero = () => {
  const roles = [
    "Software Engineer",
    "Web Developer",
    "Graphic Designer",
    "Virtual Assistance",
    "Data Entry Specialist"
  ];
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [blink, setBlink] = useState(true);
  const [pause, setPause] = useState(false);

  useEffect(() => {
    if (pause) return;

    if (subIndex === roles[index].length + 1 && !deleting) {
      setPause(true);
      setTimeout(() => setDeleting(true), 1000);
      return;
    }

    if (subIndex === 0 && deleting) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % roles.length);
      return;
    }

    const timeout = setTimeout(
      () => {
        setSubIndex((prev) => prev + (deleting ? -1 : 1));
      },
      deleting ? 50 : 120
    );

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting, pause]);

  useEffect(() => {
    if (pause) {
      const timeout = setTimeout(() => setPause(false), 800);
      return () => clearTimeout(timeout);
    }
  }, [pause]);

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearInterval(blinkInterval);
  }, []);

  return (
    <div>
      <div className="section-glow-end" data-aos="zoom-in"></div>
      <section className="hero">
        <div className="hero-left" data-aos="zoom-in">
          <h1>
            Hi, I'm <span className="glow-name">Ahmad Bilal</span>
          </h1>
          <h3 className="typewriter-text">
            I'm a{" "}
            <span className="role-text">
              {roles[index].substring(0, subIndex)}
            </span>
            <span className="cursor">{blink ? "|" : " "}</span>
          </h3>

          <div className="hero-buttons">
            <a href="#contact" className="btn project-btn">
              Contact Me
            </a>
            <a
              href="https://drive.google.com/file/d/1Vl1KPWErmAqtkjEkUJ3adutd_v3Qgm4n/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="btn view-btn btn-resume project-btn"
            >
              Download Resume
            </a>
          </div>
        </div>

        <div className="hero-right" data-aos="zoom-in">
          <img src={Image} alt="Ahmad" />
        </div>
      </section>
    </div>
  );
};
export default Hero;

