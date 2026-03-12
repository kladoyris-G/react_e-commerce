import clsx from "clsx";
import Rating from "@mui/material/Rating";
import type { ProductWithDetails } from "@models/product/Product_with_details";
import styles from "../Product_detailes.view.module.css";

type ProductInfoProps = {
  productWithDetails: ProductWithDetails;
};

const ProductInfo: React.FC<ProductInfoProps> = ({ productWithDetails }) => {
  return (
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
          sx={{ color: "#FFC633" }}
        />
        <p className="p-0">
          <span className={styles.ratingValue}>
            {productWithDetails.rating ?? 0}/
          </span>
          <span className={styles.ratingBase}>5</span>
        </p>
      </div>

      <div className="d-flex flex-row flex-wrap">
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
            <div className="ps-3 align-self-center">
              <p className={styles.discount}>
                {productWithDetails.formattedDiscount}
              </p>
            </div>
          </>
        )}
      </div>

      <p className={styles.text}>{productWithDetails.shortDescription}</p>
    </div>
  );
};

export default ProductInfo;
