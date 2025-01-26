import React from "react";
import logodark from "../assets/logo-dark.png";

const About = () => {
  return (
    <>
      <div class="section__container about__container" id="about">
        <h2 class="section__header">WE CAPTURE THE MOMENTS</h2>
        <p class="section__description">
          At Capturer, we specialize in freezing those fleeting moments in time
          that hold immense significance for you. With our passion for
          photography and keen eye for detail, we transform ordinary moments
          into extraordinary memories.
        </p>
        <p class="section__description">
          Whether it's a milestone event, a candid portrait, or the breathtaking
          beauty of nature, we strive to encapsulate the essence of every
          moment, ensuring that your cherished memories last a lifetime. Trust
          us to capture the magic of your life's journey, one frame at a time.
        </p>
        <img src={logodark} alt="logo" />
      </div>
    </>
  );
};

export default About;
