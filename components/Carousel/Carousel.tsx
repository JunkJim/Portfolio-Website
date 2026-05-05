import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./Carousel.module.css";
import Spinner from "components/Spinner/Spinner";
import { GalleryImage } from "@/types";

interface Props {
  images?: GalleryImage[];
}

const Carousel = ({ images }: Props) => {
  // Always normalise data first
  const safeImages = images ?? [];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // Keep index in bounds whenever images change
  useEffect(() => {
    if (currentIndex >= safeImages.length) {
      setCurrentIndex(0);
    }
  }, [currentIndex, safeImages.length]);

  // Early return AFTER hooks (important rule)
  if (safeImages.length === 0) {
    return <Spinner />;
  }

  const currentImage = safeImages[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? safeImages.length - 1 : prev - 1));
    setIsLoading(true);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === safeImages.length - 1 ? 0 : prev + 1));
    setIsLoading(true);
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
    setIsLoading(true);
  };

  const handleImageClick = () => {
    if (currentImage?.link) {
      window.open(currentImage.link, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div className={styles.carousel}>
      {isLoading && <Spinner />}

      <div className={styles.imageContainer}>
        <Image
          src={currentImage.img}
          alt={`carousel-${currentIndex}`}
          onLoadingComplete={() => setIsLoading(false)}
          onClick={handleImageClick}
          style={{
            cursor: currentImage.link ? "pointer" : "default",
          }}
        />
      </div>

      <div className={styles.controls}>
        <button
          className={styles.controlButton}
          onClick={handlePrev}
          aria-label="Previous Image"
        >
          &#10094;
        </button>

        <button
          className={styles.controlButton}
          onClick={handleNext}
          aria-label="Next Image"
        >
          &#10095;
        </button>
      </div>

      <div className={styles.dots}>
        {safeImages.map((_, index) => (
          <div
            key={index}
            className={`${styles.dot} ${
              index === currentIndex ? styles.active : ""
            }`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
