
import React from "react";
import { Carousel } from "react-responsive-carousel";
import { img } from "./img/data";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "../../Components/Carousel/Carousel.module.css";

function CarouselEffect() {
  return (
    <div>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
        showThumbs={false}
      >
        {img.map((imageItemLink, index) => (
          <div className={styles.hero__img} key={index}>
            <img
              src={imageItemLink}
              alt={imageItemLink.alt || `slide-${index}`}
            />
            {/* Optional content on top of the image */}
            {/* <div className={styles.hero__content}>...text/buttons...</div> */}
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default CarouselEffect;
