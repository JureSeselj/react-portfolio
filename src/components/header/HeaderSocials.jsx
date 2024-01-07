import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header_socials">
      <a href="https://www.linkedin.com/in/jure-seselj-062654192/" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/JureSeselj" target="_blank">
        <FaGithub />
      </a>
      <a href="https://www.youtube.com/" target="_blank">
        <BsYoutube />
      </a>
    </div>
  );
};

export default HeaderSocials;