import React from "react";

const Service = () => {
  return (
    <>
      <section class="service" id="service">
        <div class="section__container service__container">
          <h2 class="section__header">~ SERVICES ~</h2>
          <p class="section__description">
            At Capturer, we offer a range of professional photography services
            tailored to meet your unique needs. With a commitment to excellence
            and creativity, we strive to exceed your expectations, delivering
            captivating visuals that tell your story with authenticity and
            passion.
          </p>
          <div class="service__grid">
            <div class="service__card">
              <h4>Portrait Sessions</h4>
              <p>
                Our portrait sessions are designed to showcase your personality
                and style in stunning imagery.
              </p>
            </div>
            <div class="service__card">
              <h4>Maternity Sessions</h4>
              <p>
                Embrace the beauty and miracle of new life with our maternity
                and newborn photography sessions.
              </p>
            </div>
            <div class="service__card">
              <h4>Family Sessions</h4>
              <p>
                Cherish the bond of family with our custom-designed playful
                candid moments and portrait sessions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
