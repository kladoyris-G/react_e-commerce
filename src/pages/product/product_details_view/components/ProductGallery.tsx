import { useEffect, useMemo, useState } from "react";
import clsx from "clsx";
import styles from "../Product_detailes.view.module.css";

type ProductGalleryProps = {
  images: string[];
  productTitle: string;
  productId: number;
};

const ProductGallery: React.FC<ProductGalleryProps> = ({
  images,
  productTitle,
  productId,
}) => {
  const filteredImages = useMemo(() => images.filter(Boolean), [images]);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  useEffect(() => {
    setSelectedImageIndex(0);
  }, [productId]);

  const selectedImage = filteredImages[selectedImageIndex] ?? filteredImages[0] ?? "";

  return (
    <div className={clsx("col-12 col-md", styles.gallery)}>
      <div className={styles.thumbnails}>
        {filteredImages.map((img, index) => (
          <button
            type="button"
            key={`${img}-${index}`}
            className={
              index === selectedImageIndex
                ? `${styles.thumbButton} ${styles.thumbButtonActive}`
                : styles.thumbButton
            }
            onClick={() => setSelectedImageIndex(index)}
            aria-label={`Show product image ${index + 1}`}
          >
            <img src={img} alt={`${productTitle} thumbnail ${index + 1}`} />
          </button>
        ))}
      </div>

      <div className={styles.mainImageContainer}>
        {selectedImage ? (
          <img
            className={styles.mainImage}
            src={selectedImage}
            alt={productTitle}
          />
        ) : (
          <div className={styles.noImage}>No image available</div>
        )}
      </div>
    </div>
  );
};

export default ProductGallery;
