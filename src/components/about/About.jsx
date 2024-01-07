import React from "react";
import "./about.css";
import profile_picture from "../../assets/profile3.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={profile_picture} alt="About Jure image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>5 Months Working Experience</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Employers</h5>
              <small>6+ Satisfied Past Employers</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>3+ Completed</small>
            </article>
          </div>
          <p>
          Hello, I'm Jure Seselj, a budding full stack developer fueled by a relentless curiosity 
          for technology and a passion for crafting elegant digital solutions. 
          As a recent entrant into the world of web development, my journey has been marked by a steadfast commitment to learning and embracing challenges.
          <br/>
          I thrive on the thrill of turning ideas into functional, user-centric applications, 
          with a keen eye for both front-end aesthetics and back-end intricacies. 
          My toolbox includes a range of programming languages, frameworks, and a natural instinct for problem-solving. 
          Beyond the code, I am an enthusiastic collaborator, always eager to contribute to innovative projects and 
          share ideas with like-minded individuals. 
          My mission is to continuously evolve, adapt, and make a meaningful impact in the ever-evolving landscape of technology. 
          Let's connect, collaborate, and build something extraordinary together.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;