import { useEffect, useState } from "react";
import styles from "../Product_detailes.view.module.css";

type ProductSelectorsProps = {
  colors: string[];
  sizes: string[];
  productId: number;
};

const ProductSelectors: React.FC<ProductSelectorsProps> = ({
  colors,
  sizes,
  productId,
}) => {
  const [selectedColor, setSelectedColor] = useState(colors[0] ?? "");
  const [selectedSize, setSelectedSize] = useState(sizes[0] ?? "");

  useEffect(() => {
    setSelectedColor(colors[0] ?? "");
  }, [colors, productId]);

  useEffect(() => {
    setSelectedSize(sizes[0] ?? "");
  }, [sizes, productId]);

  return (
    <>
      <hr />
      <p className={styles.text}>Select Color:</p>
      <div className={styles.colorOptions} role="radiogroup" aria-label="Color">
        {colors.map((color) => (
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

      <hr />
      <p className={styles.text}>Choose Size:</p>
      <div className={styles.sizeOptions} role="radiogroup" aria-label="Size">
        {sizes.map((size) => (
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
    </>
  );
};

export default ProductSelectors;
