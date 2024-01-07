import React from "react";
import "./footer.css";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      {/* eslint-disable-next-line */}
      <a href="#" className="footer__logo">
        Jure Seselj
      </a>
      <ul className="permalinks">
        <li>
          {/* eslint-disable-next-line */}
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/jure-seselj-062654192/">
          <BsLinkedin />
        </a>
        <a href="https://github.com/JureSeselj">
          <FaGithub />
        </a>
        <a href="https://www.youtube.com/">
          <BsYoutube />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Jure Seselj. All rights reserved</small>
      </div>
    </footer>
  );
};

export default Footer;