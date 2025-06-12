import React from "react";
import Quiz from "../components/images/quiz-app.png";
import ReactStater from "../components/images/react-starter.png";
import Moshy from "../components/images/moshify.png";
import weather from "../components/images/weather-app.jpg";
import Typing from "../components/images/Typing Speed Test.png";
import portfolio from "../components/images/portfolio.png";
import Clinic from "../components/images/clinic.png";

const Projects = () => {
  return (
    <>
      <div className="section-glow-end" data-aos="zoom-in"></div>
      <section className="projects" id="projects">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <img src={Clinic} />
            <h3>Clinic scheduler</h3>
            <p>
              Modern Clinic schedule built with Next and related technologies
              for taking appointments.
            </p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://clinic-appoinment-kh.vercel.app//"
            >
              <button className="project-btn">View Project</button>
            </a>
          </div>
          <div className="project-card">
            <img src={portfolio} />
            <h3>Portfolio</h3>
            <p>
              Modern portfolio built with React and related technologies for
              show case my skills and experience.
            </p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://ahmadbilal-kh-portfolio.vercel.app/"
            >
              <button className="project-btn">View Project</button>
            </a>
          </div>
          <div className="project-card">
            <img src={Moshy} />
            <h3>Moshify Website</h3>
            <p>
              A responsive website for client built using HTML, CSS, and
              JavaScript with glowing UI effects.
            </p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://moshifyed-kh.netlify.app/"
            >
              <button className="project-btn">View Project</button>
            </a>
          </div>
          <div className="project-card">
            <img src={ReactStater} />
            <h3>React Starter</h3>
            <p>
              Modern website built with React, Redux, and Node.js for seamless
              user-friendly experience.
            </p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://react-starter-kh.vercel.app/"
            >
              <button className="project-btn">View Project</button>
            </a>
          </div>
          <div className="project-card">
            <img src={Quiz} />
            <h3>Quiz App</h3>
            <p>
              Modern quiz-app website built with React and related technologies
              for checking student minds.
            </p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://quiz-app-kh.vercel.app/"
            >
              <button className="project-btn">View Project</button>
            </a>
          </div>
          <div className="project-card">
            <img src={weather} />
            <h3>Weather Application</h3>
            <p>
              Modern weather website built with React and related technologies
              for checking weather.
            </p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://weather-kh.vercel.app/"
            >
              <button className="project-btn">View Project</button>
            </a>
          </div>
          <div className="project-card">
            <img src={Typing} />
            <h3>Typing Speed Test</h3>
            <p>
              Modern typing speed tester built with React and related
              technologies for checking user typing speed.
            </p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://typing-speed-kh.vercel.app/"
            >
              <button className="project-btn">View Project</button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
