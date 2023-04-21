import React, { useState, useEffect } from "react";
import vLeft from "../images/icons/v-left.png";
import vRight from "../images/icons/v-right.png";

const Carousel = ({ album, time }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isActive, setIsActive] = useState(album.length > 1);
  const totalPhotos = album.length;

  useEffect(() => {
    setIsActive(album.length > 1);
  }, [album]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % album.length);
    }, time);
    return () => clearInterval(interval);
  }, [currentIndex, album.length]);

  function handlePrev() {
    setCurrentIndex((currentIndex - 1 + album.length) % album.length);
  }

  function handleNext() {
    setCurrentIndex((currentIndex + 1) % album.length);
  }

  return (
    <div className="carousel">
      <img id="carouselItem" src={album[currentIndex]} alt="carousel item" />
      <img
        id="prevButton"
        className={isActive ? "active" : ""}
        src={vLeft}
        alt="image suivante"
        onClick={handlePrev}
      />
      <img
        id="nextButton"
        className={isActive ? "active" : ""}
        src={vRight}
        alt="image suivante"
        onClick={handleNext}
      />
      <p className={`carousel-counter ${isActive ? "active" : ""}`}>
        {" "}
        {currentIndex + 1}/{album.length}{" "}
      </p>
    </div>
  );
};

export default Carousel;
