import React from "react";
import Quiz from "../components/images/quiz-app.png";
import ReactStater from "../components/images/react-starter.png";
import Moshy from "../components/images/moshify.png";
import weather from "../components/images/weather-app.jpg";
import Typing from "../components/images/Typing Speed Test.png";
import portfolio from "../components/images/portfolio.png";

const Projects = () => {
  return (
    <>
      <div className="section-glow-end" data-aos="zoom-in"></div>
      <section className="projects" id="projects">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <img src={portfolio} alt="Project 2" />
            <h3>Portfolio</h3>
            <p>
              Modern portfolio built with React and related technologies for
              show case my skills and experience.
            </p>
            <button className="project-btn">
              <a href="https://ahmadbilal-kh-portfolio.vercel.app/">
                View Project
              </a>
            </button>
          </div>
          <div className="project-card">
            <img src={Moshy} alt="Project 1" />
            <h3>Moshify Website</h3>
            <p>
              A responsive website for client built using HTML, CSS, and
              JavaScript with glowing UI effects.
            </p>
            <button className="project-btn">
              <a href="https://moshifyed-kh.netlify.app/">View Project</a>
            </button>
          </div>
          <div className="project-card">
            <img src={ReactStater} alt="Project 2" />
            <h3>React Starter</h3>
            <p>
              Modern website built with React, Redux, and Node.js for seamless
              user-friendly experience.
            </p>
            <button className="project-btn">
              <a href="https://react-starter-kh.vercel.app/">View Project</a>
            </button>
          </div>
          <div className="project-card">
            <img src={Quiz} alt="Project 2" />
            <h3>Quiz App</h3>
            <p>
              Modern quiz-app website built with React and related technologies
              for checking student minds.
            </p>
            <button className="project-btn">
              <a href="https://quiz-app-kh.vercel.app/">View Project</a>
            </button>
          </div>
          <div className="project-card">
            <img src={weather} alt="Project 2" />
            <h3>Weather Application</h3>
            <p>
              Modern weather website built with React and related technologies
              for checking weather.
            </p>
            <button className="project-btn">
              <a href="https://weather-kh.vercel.app/">View Project</a>
            </button>
          </div>
          <div className="project-card">
            <img src={Typing} alt="Project 2" />
            <h3>Typing Speed Test</h3>
            <p>
              Modern typing speed tester built with React and related
              technologies for checking user typing speed.
            </p>
            <button className="project-btn">
              <a href="https://typing-speed-kh.vercel.app/">View Project</a>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
