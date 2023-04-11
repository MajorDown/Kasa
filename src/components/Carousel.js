import React, { useState, useEffect } from "react";
import vLeft from "../images/icons/v-left.png";
import vRight from "../images/icons/v-right.png";

const Carousel = ({ album, time }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

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
      <img
        className="prevButton"
        src={vLeft}
        alt="image suivante"
        onClick={handlePrev}
      />
      <img
        className="nextButton"
        src={vRight}
        alt="image suivante"
        onClick={handleNext}
      />
      <img src={album[currentIndex]} alt="carousel item" />
    </div>
  );
};

export default Carousel;
