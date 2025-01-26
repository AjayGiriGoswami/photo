import React, { useState } from "react";
import logo from "../assets/logo-white.png";
import { Link } from "react-router-dom";

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <>
      <div>
        <header className="header" id="home">
          <nav>
            <div className="nav__header">
              <div className="nav__logo">
                <a href="#">
                  <img src={logo} alt="logo" />
                </a>
              </div>
              <div className="nav__menu__btn" onClick={toggleMenu}>
                <i className={isMenuOpen ? "ri-close-line" : "ri-menu-line"}></i>
              </div>
            </div>
            <ul className={`nav__links ${isMenuOpen ? "open" : ""}`}>
              <li>
                <Link to="/">HOME</Link>
              </li>
              <li>
                <Link to="/about">ABOUT US</Link>
              </li>
              <li>
                <Link to="/service">SERVICES</Link>
              </li>
              <li className="nav__logo">
                <Link to="/portfolio">
                  <img src={logo} alt="logo" />
                </Link>
              </li>
              <li>
                <Link to="/client">CLIENT</Link>
              </li>
              <li>
                <Link to="/blog">BLOG</Link>
              </li>
              <li>
                <Link to="/contact">CONTACT US</Link>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    </>
  );
};

export default Home;