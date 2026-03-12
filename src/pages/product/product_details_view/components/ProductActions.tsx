import { useEffect, useState } from "react";
import PillButton from "@components/buttons/pill_button/Pill_button";
import styles from "../Product_detailes.view.module.css";

type ProductActionsProps = {
  productId: number;
};

const ProductActions: React.FC<ProductActionsProps> = ({ productId }) => {
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    setQuantity(1);
  }, [productId]);

  return (
    <>
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
    </>
  );
};

export default ProductActions;
