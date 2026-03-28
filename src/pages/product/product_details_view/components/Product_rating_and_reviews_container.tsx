import AnimatedPillButton from "@components/buttons/animated_pill_button/Animated_pill_button";
import CustomToggleButton from "@components/buttons/custom_toggle_button/Custom_toggle_button";
import CustomerRatingContainer from "@components/customer_rating/customer_rating_container/Customer_rating_container";
import type { CustomerRating } from "@models/customer_rating/Customer_rating";
import { useState } from "react";
import { MdTune } from "react-icons/md";

type ProductRatingAndReviewsContainerProps = {
  customersRatings: CustomerRating[];
};

const ProductRatingAndReviewsContainer: React.FC<
  ProductRatingAndReviewsContainerProps
> = ({ customersRatings }) => {
  const [showAll, setShowAll] = useState(false);
  const visibleRatings = showAll
    ? customersRatings
    : customersRatings.slice(0, 6);

  return (
    <>
      <div className="d-flex justify-content-between">
        <div className="d-flex  align-items-center">
          <p className="fw-bold fs-4">All Reviews</p>
          <p className="ps-2 mt-0">({customersRatings.length})</p>
        </div>

        <div className="d-flex  align-items-center">
          <CustomToggleButton
            icon={<MdTune style={{ transform: "rotate(90deg)" }} />}
          />
          <CustomToggleButton className="mx-2" label="Latest v" />

          <CustomToggleButton label="Write a Review" active={true} />
        </div>
      </div>
      <div className="row align-items-stretch ">
        {visibleRatings?.map((rating) => (
          <div className="col-12 col-md-6 py-2 d-flex">
            <CustomerRatingContainer customerRating={rating} />
          </div>
        ))}
      </div>
      {!showAll && customersRatings.length > 6 && (

        <AnimatedPillButton label={"Load More"}
         onClick={() => setShowAll(true)}/>
      
      )}
    </>
  );
};

export default ProductRatingAndReviewsContainer;
