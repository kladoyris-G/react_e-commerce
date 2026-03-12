import { useEffect, useMemo, useState } from "react";
import type { ProductWithDetails } from "@models/product/Product_with_details";
import styles from "./Product_detailes.view.module.css";
import clsx from "clsx";
import Rating from "@mui/material/Rating";
import PillButton from "@components/buttons/pill_button/Pill_button";

type ProductDetailesViewProps = {
  productWithDetails?: ProductWithDetails;
};

const ProductDetailesView: React.FC<ProductDetailesViewProps> = ({
  productWithDetails,
}) => {
  const images = useMemo(
    () => productWithDetails?.images?.filter(Boolean) ?? [],
    [productWithDetails?.images],
  );

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const availableColors = useMemo(
    () => productWithDetails?.colors ?? [],
    [productWithDetails?.colors],
  );

  const availableSizes = useMemo(
    () => productWithDetails?.sizes ?? [],
    [productWithDetails?.sizes],
  );

  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    setSelectedImageIndex(0);
  }, [productWithDetails?.id]);

  useEffect(() => {
    setSelectedSize(availableSizes[0] ?? "");
  }, [availableSizes, productWithDetails?.id]);

  useEffect(() => {
    setSelectedColor(availableColors[0] ?? "");
  }, [availableColors, productWithDetails?.id]);

  useEffect(() => {
    setQuantity(1);
  }, [productWithDetails?.id]);

  if (!productWithDetails) {
    return null;
  }

  const selectedImage = images[selectedImageIndex] ?? images[0] ?? "";

  return (
    <section className="mainContentWrapper">
      <div className="row">
        {/* =-=-=-=-=-= Carousel =-=-=-=-=-= */}
        <div className={clsx("col-12 col-md ", styles.gallery)}>
          <div className={styles.thumbnails}>
            {images.map((img, index) => (
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
                <img
                  src={img}
                  alt={`${productWithDetails.title} thumbnail ${index + 1}`}
                />
              </button>
            ))}
          </div>

          <div className={styles.mainImageContainer}>
            {selectedImage ? (
              <img
                className={styles.mainImage}
                src={selectedImage}
                alt={productWithDetails.title}
              />
            ) : (
              <div className={styles.noImage}>No image available</div>
            )}
          </div>
        </div>

        <div className="col-12 col-md">
          {/* =-=-=-=-=-= Product Details =-=-=-=-=-= */}
          <div>
            <h1 className={styles.title}>{productWithDetails.title}</h1>

            <div className="d-flex flex-row flex-wrap">
              <Rating
                name="half-rating"
                defaultValue={0}
                className="pe-2"
                value={productWithDetails.rating}
                precision={0.5}
                readOnly
                sx={{
                  color: "#FFC633",
                }}
              />

              <p className="p-0">
                <span className={styles.ratingValue}>
                  {productWithDetails.rating ?? 0}/
                </span>
                <span className={styles.ratingBase}>5</span>
              </p>
            </div>

            <div className="d-flex flex-row flex-wrap ">
              <div className={styles.price}>
                <p>{productWithDetails.formattedFinalPrice}</p>
              </div>
              {productWithDetails.discount > 0 && (
                <>
                  <div className={clsx("ps-3", styles.price)}>
                    <p className={styles.discountPrice}>
                      {productWithDetails.formattedPrice}
                    </p>
                  </div>
                  <div className={clsx("ps-3 align-self-center")}>
                    <p className={styles.discount}>
                      {productWithDetails.formattedDiscount}
                    </p>
                  </div>
                </>
              )}
            </div>

            <p className={styles.text}>{productWithDetails.shortDescription}</p>
          </div>
          {/* =-=-=-=-=-= Color selector =-=-=-=-=-= */}
          <hr />
          <p className={styles.text}>Select Color:</p>
          <div
            className={styles.colorOptions}
            role="radiogroup"
            aria-label="Color"
          >
            {availableColors.map((color) => (
              <label key={color} className={styles.colorLabel}>
                <input
                  type="radio"
                  name="product-color"
                  value={color}
                  checked={selectedColor === color}
                  onChange={() => setSelectedColor(color)}
                  className={styles.colorInput}
                />
                <span
                  className={
                    selectedColor === color
                      ? `${styles.colorSwatch} ${styles.colorSwatchSelected}`
                      : styles.colorSwatch
                  }
                  style={{ backgroundColor: color }}
                  aria-label={`Color ${color}`}
                  title={color}
                >
                  {selectedColor === color && (
                    <span className={styles.colorTick} aria-hidden="true">
                      ✓
                    </span>
                  )}
                </span>
              </label>
            ))}
          </div>
          {/* =-=-=-=-=-= Size selector =-=-=-=-=-= */}
          <hr />
          <p className={styles.text}>Choose Size:</p>
          <div
            className={styles.sizeOptions}
            role="radiogroup"
            aria-label="Size"
          >
            {availableSizes.map((size) => (
              <label key={size} className={styles.sizeLabel}>
                <input
                  type="radio"
                  name="product-size"
                  value={size}
                  checked={selectedSize === size}
                  onChange={() => setSelectedSize(size)}
                  className={styles.sizeInput}
                />
                <span
                  className={
                    selectedSize === size
                      ? `${styles.sizeChip} ${styles.sizeChipSelected}`
                      : styles.sizeChip
                  }
                >
                  {size}
                </span>
              </label>
            ))}
          </div>
          {/* =-=-=-=-=-= Add to card =-=-=-=-=-= */}
          <hr />
          <div className="d-flex">
            <div className="col-4 pe-2">
              <div className={styles.quantityPill}>
                <button
                  type="button"
                  className={styles.quantityEdgeButton}
                  onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                  aria-label="Decrease quantity"
                >
                  -
                </button>

                <span className={styles.quantityValue}>{quantity}</span>

                <button
                  type="button"
                  className={styles.quantityEdgeButton}
                  onClick={() => setQuantity((prev) => prev + 1)}
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>
            </div>
            <div className="col-8">
              <PillButton
                label="Add to Cart"
                className={styles.addToCartButton}
                labelClassName={styles.addToCartLabel}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailesView;
