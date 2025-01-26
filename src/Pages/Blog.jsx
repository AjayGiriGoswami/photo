import React, { useEffect, useState } from "react";
import image1 from "../assets/image-1.jpg";
import image2 from "../assets/image-2.jpg";
import image3 from "../assets/image-3.jpg";
import image4 from "../assets/image-4.jpg";
import image5 from "../assets/image-5.jpg";
import image6 from "../assets/image-6.jpg";
import image7 from "../assets/image-7.jpg";
import image8 from "../assets/image-8.jpg";

const Blog = () => {
  const images = [
    {
      id: 1,
      image: image1,
      alt: "image1",
    },
    {
      id: 2,
      image: image2,
      alt: "image2",
    },
    {
      id: 3,
      image: image3,
      alt: "image3",
    },
    {
      id: 4,
      image: image4,
      alt: "image4",
    },
    {
      id: 5,
      image: image5,
      alt: "image5",
    },
    {
      id: 6,
      image: image6,
      alt: "image6",
    },
    {
      id: 7,
      image: image7,
      alt: "image7",
    },
    {
      id: 8,
      image: image8,
      alt: "image8",
    },
  ];

  const [displayedImages, setDisplayedImages] = useState(images);

  useEffect(() => {
    // Duplicate the images and set aria-hidden attribute
    const duplicatedImages = images.map((image) => ({
      ...image,
      ariaHidden: true,
    }));
    setDisplayedImages((prevImages) => [...prevImages, ...duplicatedImages]);
  }, []);
  return (
    <>
      <section class="blog">
        <div class="section__container blog__container">
          <div class="blog__content">
            <h2 class="section__header">~ LATEST BLOG ~</h2>
            <h4>Capturing Emotion in Every Frame</h4>
            <p>
              This blog post delves into the importance of storytelling in
              photography and how Capturer approaches capturing emotion and
              narrative in their work. Readers will discover the techniques and
              strategies used by professional photographers to evoke emotion,
              convey meaning, and create compelling visual narratives that
              resonate with viewers on a deep level.
            </p>
            <div class="blog__btn">
              <button class="btn">Read More</button>
            </div>
          </div>
        </div>
      </section>

      {/*  */}
      <section class="section__container instagram__container">
        <h2 class="section__header">~ INSTAGRAM ~</h2>
        <div class="instagram__flex">
          {displayedImages.map((image, index) => (
            <img
              key={index}
              src={image.image}
              alt={image.alt}
              aria-hidden={image.ariaHidden ? "true" : "false"}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Blog;
