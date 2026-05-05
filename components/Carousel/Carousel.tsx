import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./Carousel.module.css";
import Spinner from "components/Spinner/Spinner";
import { GalleryImage } from "@/types";

interface Props {
  images?: GalleryImage[];
}

const Carousel = ({ images }: Props) => {
  const safeImages = images ?? [];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (currentIndex >= safeImages.length) {
      setCurrentIndex(0);
    }
  }, [currentIndex, safeImages.length]);

  if (safeImages.length === 0) {
    return <Spinner />;
  }

  const currentImage = safeImages[currentIndex];
  const link = currentImage?.link;

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
    if (!link) return;
    window.open(link, "_blank", "noopener,noreferrer");
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
            cursor: link ? "pointer" : "default",
          }}
        />
      </div>

      <div className={styles.controls}>
        <button onClick={handlePrev} aria-label="Previous Image">
          &#10094;
        </button>

        <button onClick={handleNext} aria-label="Next Image">
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
