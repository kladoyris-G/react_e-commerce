import type { CustomerRating } from "@models/customer_rating/Customer_rating";
import Rating from "@mui/material/Rating";
import { BsCheckCircleFill } from "react-icons/bs";
import styles from "./Customer_rating_container.module.css";
import clsx from "clsx";

type CustomerRatingProps = {
  customerRating: CustomerRating;
};

const CustomerRatingContainer: React.FC<CustomerRatingProps> = ({
  customerRating,
}) => {
  return (
    <>
      <div className="card p-4 w-100">
        <Rating
          name="half-rating"
          defaultValue={0}
          className="pe-2"
          value={customerRating.rating}
          precision={0.5}
          readOnly
          sx={{
            color: "##FFC633",
          }}
        />
        <div className="py-2">
          <p
            className={clsx(
              "m-0 flex items-center justify-start gap-2 w-fit",
              styles.title,
            )}
          >
            <span>{customerRating.userName}</span>
            {customerRating.isUserValid && (
              <BsCheckCircleFill color="#01AB31" />
            )}
          </p>
        </div>
        <div className={styles.comment}>
          <p>“{customerRating.comment}”</p>
        </div>
      </div>
    </>
  );
};

export default CustomerRatingContainer;
