import React from "react";
import Quiz from "../components/images/quiz-app.png";
import ReactStater from "../components/images/react-starter.png";
import Moshy from "../components/images/moshify.png";
import weather from "../components/images/weather-app.jpg";

const Projects = () => {
  return (
    <>
      <div class="section-glow-end" data-aos="fade-down"></div>
      <section class="projects" id="projects">
        <h2 class="section-title" data-aos="zoom-out">
          Projects
        </h2>
        <div class="projects-grid">
          <div class="project-card">
            <img src={Moshy} alt="Project 1" />
            <h3>Moshify Website</h3>
            <p>
              A responsive website for client built using HTML, CSS, and
              JavaScript with glowing UI effects.
            </p>
            <button class="project-btn">
              <a target="_blank" href="https://moshifyed-kh.netlify.app/">
                View Project
              </a>
            </button>
          </div>
          <div class="project-card">
            <img src={ReactStater} alt="Project 2" />
            <h3>React Starter</h3>
            <p>
              Modern website built with React, Redux, and Node.js for seamless
              user-friendly experience.
            </p>
            <button class="project-btn">
              <a target="_blank" href="https://react-starter-kh.vercel.app/">
                View Project
              </a>
            </button>
          </div>
          <div class="project-card">
            <img src={Quiz} alt="Project 2" />
            <h3>Quiz App</h3>
            <p>
              Modern quiz-app website built with React and related technologies
              for checking student minds.
            </p>
            <button class="project-btn">
              <a target="_blank" href="https://quiz-app-kh.vercel.app/">
                View Project
              </a>
            </button>
          </div>
          <div class="project-card">
            <img src={weather} alt="Project 2" />
            <h3>Weather Application</h3>
            <p>
              Modern weather website built with React and related technologies
              for checking weather.
            </p>
            <button class="project-btn">
              <a target="_blank" href="https://weather-kh.vercel.app/">
                View Project
              </a>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
