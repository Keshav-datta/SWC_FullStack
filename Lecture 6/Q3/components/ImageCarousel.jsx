import { useEffect, useState } from "react";
import "../styles/Carousel.css";

function ImageCarousel({ images }) {
  const [currentIndex, setCurrentIndex] =
    useState(0);

  const [isHovered, setIsHovered] =
    useState(false);

  const nextSlide = () => {
    setCurrentIndex(
      (prev) => (prev + 1) % images.length
    );
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) =>
        prev === 0
          ? images.length - 1
          : prev - 1
    );
  };

  useEffect(() => {
    if (isHovered) return;

    const timer = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(timer);
  }, [isHovered]);

  return (
    <div
      className="carousel"
      onMouseEnter={() =>
        setIsHovered(true)
      }
      onMouseLeave={() =>
        setIsHovered(false)
      }
    >
      <button
        className="nav-btn"
        onClick={prevSlide}
      >
        ❮
      </button>

      <img
        src={images[currentIndex]}
        alt="carousel"
        className="carousel-image"
      />

      <button
        className="nav-btn"
        onClick={nextSlide}
      >
        ❯
      </button>
    </div>
  );
}

export default ImageCarousel;
