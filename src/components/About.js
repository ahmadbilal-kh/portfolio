import React from "react";

const About = () => {
  return (
    <div>
      <div className="section-glow-end" data-aos="zoom-in"></div>
      <div className="about" id="about" data-aos="zoom-in">
        <h2 className="section-title">About</h2>
        <p className="about-text">
          I'm <span className="glow-name">Ahmad Bilal</span>, a passionate Web
          Developer with over <span className="glow-name"> 2 </span>years of
          hands-on experience crafting modern, responsive, and dynamic web
          applications. My skillset spans across
          <span className="glow-name">
            {" "}
            HTML, CSS, Tailwind, Bootstrap, JavaScript, TypeScript, React,
            Node.js, Next.js, MongoDB, PHP, SQL, MySQL, and related technologies. 
          </span>
          I also know <span className="glow-name"> Virtual Assistance, Accountant, Data Entry, and Graphic design tools like 
            {" "} Figma, Canva, Photoshop, Illustrator, and related tools. </span>
          I love turning ideas into real-life products that are not only
          visually appealing but also user-friendly and high-performing. I'm
          always eager to learn, collaborate, and contribute to projects that
          make a difference.
        </p>
      </div>
    </div>
  );
};

export default About;


