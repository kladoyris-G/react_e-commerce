import Rating from "@mui/material/Rating";
import type { Product } from "../../../models/product/Product";
import styles from "./Product_container.module.css";
import clsx from "clsx";

type ProductContainerProps = {
  product: Product;
  className?: string;
};

const ProductContainer: React.FC<ProductContainerProps> = ({
  product,
  className,
}) => {
  return (
    <div className={clsx(styles.productWrapper, className)}>
      <div className={styles.imageContainer}>
        <img className={styles.image} src={product.images[0]} />
      </div>

      <h1 className={clsx(styles.title)}>{product.title}</h1>

      <div className="d-flex flex-row flex-wrap">
        <Rating
          name="half-rating"
          defaultValue={0}
          className="pe-2"
          value={product.rating}
          precision={0.5}
          readOnly
          sx={{
            color: "##FFC633",
          }}
        />

        <p className="p-0">
          <span className={styles.ratingValue}>{product.rating ?? 0}/</span>
          <span className={styles.ratingBase}>5</span>
        </p>
      </div>

      <div className="d-flex flex-row flex-wrap ">
        <div className={styles.price}>
          <p>{product.formattedFinalPrice}</p>
        </div>
        {product.discount > 0 && (
          <>
            <div className={clsx("ps-3", styles.price)}>
              <p className={styles.discountPrice}>{product.formattedPrice}</p>
            </div>
            <div className={clsx("ps-3 align-self-center")}>
              <p className={styles.discount}>{product.formattedDiscount}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductContainer;
