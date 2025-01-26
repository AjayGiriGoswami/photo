import React from "react";
import portfolio1 from "../assets/portfolio-1.jpg";
import portfolio2 from "../assets/portfolio-2.jpg";
import portfolio3 from "../assets/portfolio-3.jpg";

const Portfolio = () => {
  return (
    <>
      <div class="section__container portfolio__container">
        <h2 class="section__header">~ PORTFOLIO ~</h2>
        <div class="portfolio__grid">
          <div class="portfolio__card">
            <img src={portfolio1} alt="portfolio" />
            <div class="portfolio__content">
              <button class="btn">VIEW PPORTFOLIO</button>
            </div>
          </div>
          <div class="portfolio__card">
            <img src={portfolio2} alt="portfolio" />
            <div class="portfolio__content">
              <button class="btn">VIEW PPORTFOLIO</button>
            </div>
          </div>
          <div class="portfolio__card">
            <img src={portfolio3} alt="portfolio" />
            <div class="portfolio__content">
              <button class="btn">VIEW PPORTFOLIO</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
