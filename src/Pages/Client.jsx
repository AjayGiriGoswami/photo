import React from "react";
import client1 from "../assets/client-1.jpg";
import client2 from "../assets/client-2.jpg";
import client3 from "../assets/client-3.jpg";
import image1 from "../assets/image-1.jpg";
import image2 from "../assets/image-2.jpg";
import image3 from "../assets/image-3.jpg";
import image4 from "../assets/image-4.jpg";
import image5 from "../assets/image-5.jpg";
import image6 from "../assets/image-6.jpg";
import image7 from "../assets/image-7.jpg";
import image8 from "../assets/image-8.jpg";

import { SwiperSlide, Swiper } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";

const Client = () => {
  return (
    <>
      <section className="section__container client__container">
        <h2 className="section__header">~ Client Review ~</h2>
        <Swiper
          modules={[Pagination]} // Use Pagination here
          pagination={{ clickable: true }}
          className="swiper"
        >
          <SwiperSlide>
            <div className="client__card">
              <img src={client1} alt="client" />
              <p>
                Capturer exceeded all our expectations! Their attention to
                detail and ability to capture the essence of our special day was
                truly remarkable. Every time we look at our wedding photos,
                we're transported back to those magical moments. Thank you for
                preserving our memories so beautifully!
              </p>
              <h4>Sarah and Michael</h4>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="client__card">
              <img src={client2} alt="client" />
              <p>
                We couldn't be happier with our family portrait session with
                Capturer. They made us feel relaxed and comfortable throughout
                the entire shoot, resulting in natural and candid photos that
                perfectly reflect our family dynamic. These images will be
                cherished for years to come!
              </p>
              <h4>The Johnson Family</h4>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="client__card">
              <img src={client3} alt="client" />
              <p>
                Capturer's maternity and newborn sessions captured the most
                precious moments of our lives with such tenderness and care.
                From the anticipation of pregnancy to the joy of welcoming our
                little one, every photo tells a story that we'll cherish
                forever. Thank you for creating beautiful memories for our
                family!
              </p>
              <h4>Emily and David</h4>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      <section className="section__container gallery__container">
        {" "}
        {/* Use className instead of class */}
        <h2 className="section__header">~ GALLERY ~</h2>
        <div className="gallery__grid">
          <img src={image1} alt="gallery" />
          <img src={image2} alt="gallery" />
          <img src={image3} alt="gallery" />
          <img src={image4} alt="gallery" />
          <img src={image5} alt="gallery" />
          <img src={image6} alt="gallery" />
          <img src={image7} alt="gallery" />
          <img src={image8} alt="gallery" />
        </div>
        <div className="gallery__btn">
          {" "}
          {/* Use className instead of class */}
          <button className="btn">VIEW GALLERY</button>{" "}
          {/* Use className instead of class */}
        </div>
      </section>
    </>
  );
};

export default Client;
