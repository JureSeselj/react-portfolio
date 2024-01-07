import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/placeholder-image.png"
import IMG2 from "../../assets/placeholder-image-1.png"
import IMG3 from "../../assets/placeholder-image-2.png"

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Tasty Blog",
    github: "https://github.com/JureSeselj/tasty_blog",
    demo: "https://github.com",
  },
  {
    id: 2,
    image: IMG2,
    title: "Harmonize App",
    github: "https://github.com/JureSeselj/harmonize",
    demo: "https://github.com",
  },
  {
    id: 3,
    image: IMG3,
    title: "Explore The World",
    github: "https://github.com/JureSeselj/explore-the-world",
    demo: "https://github.com",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
                <a href={demo} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;