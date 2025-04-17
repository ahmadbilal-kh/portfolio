import React from "react";

const Education = () => {
  return (
    <div>
      <div class="section-glow-end" data-aos="fade-down"></div>
      <div
        className="education"
        id="eductaion"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <h2 className="section-title">Education</h2>
        <div className="education-item">
          <h3>Intermediate (ICS Computer Science)</h3>
          <p>
            Completed in <span className="glow-name">2022</span>
          </p>
          <p>
            Studied core science subjects including Computer, Statistics, and
            Economics, building a strong foundation for problem-solving and
            analytical thinking.
          </p>
        </div>
        <div className="education-item">
          <h3>Bachelor of Science in Software Engineering (BSSE)</h3>
          <p>
            Expected Graduation: <span className="glow-name">2026</span>
          </p>
          <p>
            Pursuing a Bachelor of Science in Software Engineering with a focus
            on full-stack web development, data structures, and software
            architecture. Gaining hands-on experience in building scalable web
            applications and working with modern technologies including React,
            Node.js, and databases like MongoDB and SQL.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Education;
