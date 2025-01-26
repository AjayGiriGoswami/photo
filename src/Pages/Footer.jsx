import React from "react";
import logoDark from "../assets/logo-dark.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer id="contact">
        <div class="section__container footer__container">
          <div class="footer__col">
            <img src={logoDark} alt="logo" />
            <div class="footer__socials">
              <Link to="/">
                <i class="ri-facebook-fill"></i>
              </Link>
              <a href="#">
                <i class="ri-instagram-line"></i>
              </a>
              <a href="#">
                <i class="ri-twitter-fill"></i>
              </a>
              <a href="#">
                <i class="ri-youtube-fill"></i>
              </a>
              <a href="#">
                <i class="ri-pinterest-line"></i>
              </a>
            </div>
          </div>
          <div class="footer__col">
            <ul class="footer__links">
              <li>
                <Link to="/">HOME</Link>
              </li>
              <li>
                <Link to="/about">ABOUT US</Link>
              </li>
              <li>
                <Link to="/service">SERVICES</Link>
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
          </div>
          <div class="footer__col">
            <h4>STAY IN TOUCH</h4>
            <p>
              Keep up-to-date with all things Capturer! Join our community and
              never miss a moment!
            </p>
          </div>
        </div>
        <div class="footer__bar">
          Copyright @2025 Lakshay Photography. All rights reserved.
        </div>
      </footer>
    </>
  );
};

export default Footer;
