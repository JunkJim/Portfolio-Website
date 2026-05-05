import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./Carousel.module.css";
import Spinner from "components/Spinner/Spinner";
import { GalleryItem } from "@/types";

interface Props {
  images?: GalleryItem[]; // make optional for safety
}

const Carousel = ({ images }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // ✅ Guard: no images yet
  if (!images || images.length === 0) {
    return <Spinner />;
  }

  // ✅ Keep index in bounds if images change
  useEffect(() => {
    if (currentIndex >= safeImages.length) {
      setCurrentIndex(0);
    }
  }, [images, currentIndex]);

  const safeImages = (images || []).filter((img) => img && img.img);

  if (safeImages.length === 0) {
    return <Spinner />;
  }

  const current = safeImages[currentIndex] || safeImages[0];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    setIsLoading(true);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    setIsLoading(true);
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
    setIsLoading(true);
  };

  return (
    <div className={styles.carousel}>
      {isLoading && <Spinner />}

      <div className={styles.imageContainer}>
        <Image
          src={current.img}
          alt={`carousel-${currentIndex}`}
          onLoadingComplete={() => setIsLoading(false)}
          onClick={() => {
            if (current.link) {
              window.open(current.link, "_blank", "noopener,noreferrer");
            }
          }}
          style={{
            cursor: current.link ? "pointer" : "default",
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
        {images.map((_, index) => (
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
