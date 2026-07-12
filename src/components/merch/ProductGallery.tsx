import { type KeyboardEvent, useState } from "react";

type ProductGalleryProps = {
  images: string[];
  productName: string;
};

export default function ProductGallery({ images, productName }: ProductGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const hasMultipleImages = images.length > 1;
  const activeImage = images[activeIndex];

  function showPrevious() {
    setActiveIndex((currentIndex) => (currentIndex === 0 ? images.length - 1 : currentIndex - 1));
  }

  function showNext() {
    setActiveIndex((currentIndex) => (currentIndex === images.length - 1 ? 0 : currentIndex + 1));
  }

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (!hasMultipleImages) {
      return;
    }

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      showPrevious();
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      showNext();
    }
  }

  return (
    <div
      className="product-gallery"
      tabIndex={hasMultipleImages ? 0 : undefined}
      onKeyDown={handleKeyDown}
      aria-label={`Galería de ${productName}`}
    >
      <figure className="product-gallery-frame">
        <img
          className="product-gallery-image"
          src={activeImage}
          alt={`${productName} imagen ${activeIndex + 1}`}
        />

        {hasMultipleImages ? (
          <>
            <button
              className="gallery-control gallery-control-prev"
              type="button"
              onClick={showPrevious}
              aria-label="Ver imagen anterior"
            >
              ←
            </button>
            <button
              className="gallery-control gallery-control-next"
              type="button"
              onClick={showNext}
              aria-label="Ver imagen siguiente"
            >
              →
            </button>
            <figcaption className="gallery-indicator">
              {activeIndex + 1} / {images.length}
            </figcaption>
          </>
        ) : null}
      </figure>
    </div>
  );
}
