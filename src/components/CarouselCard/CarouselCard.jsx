import React, { useState, useEffect } from "react";
import PropTypes from "prop-types"; // For type checking
import "./CarouselCard.css"; // Add your CSS styles here

const CarouselCard = ({ slides }) => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    loadShow();
  }, [active]);

  const loadShow = () => {
    const sliderItems = document.querySelectorAll(".slider .item");
    let stt = 0;

    sliderItems.forEach((item, index) => {
      if (index === active) {
        item.style.transform = `none`;
        item.style.zIndex = 1;
        item.style.filter = "none";
        item.style.opacity = 1;
      } else if (index > active) {
        stt++;
        item.style.transform = `translateX(${120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(-1deg)`;
        item.style.zIndex = -stt;
        item.style.filter = "blur(5px)";
        item.style.opacity = stt > 2 ? 0 : 0.6;
      } else {
        stt++;
        item.style.transform = `translateX(${-120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(1deg)`;
        item.style.zIndex = -stt;
        item.style.filter = "blur(5px)";
        item.style.opacity = stt > 2 ? 0 : 0.6;
      }
    });
  };

  const handleNext = () => {
    if (active < slides.length - 1) {
      setActive(active + 1);
    }
  };

  const handlePrev = () => {
    if (active > 0) {
      setActive(active - 1);
    }
  };

  return (
    <div className="slider">
      {slides.map((slide, index) => (
        <div className="item" key={index}>
          <img src={slide.image} alt={slide.title} />
          <h1>{slide.title}</h1>
          <p>{slide.description}</p>
        </div>
      ))}
      <button id="prev" onClick={handlePrev}>
        &lt;
      </button>
      <button id="next" onClick={handleNext}>
        &gt;
      </button>
    </div>
  );
};

// PropTypes validation (optional)
CarouselCard.propTypes = {
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default CarouselCard;
