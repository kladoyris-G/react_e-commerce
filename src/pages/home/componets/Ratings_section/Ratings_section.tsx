import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import styles from "./Ratings_section.module.css";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback } from "react";
import clsx from "clsx";
import { useGetRatingsQuery } from "@services/server_api/Ratings_api";
import CustomerRatingContainer from "@components/customer_rating/customer_rating_container/Customer_rating_container";
import CustomerRatingShimmer from "@components/customer_rating/customer_rating_shimmer_container/Customer_rating_shimmer_container";

const RatingsContainer: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
    },
    [
      Autoplay({
        delay: 5000, // 5 seconds
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ],
  );

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  const {
    data: customerRatings,
    isLoading,
    isError,
    error,
  } = useGetRatingsQuery();

  if (isError) {
    console.error(`Fetch customers ratings error:`, error);
  }

  return (
    <div className="my-5">
      <div className="mainContentWrapper">
        <div className="d-flex justify-content-between align-items-end">
          <h1 className="title mb-0 text-start">OUR HAPPY CUSTOMERS</h1>

          <div className="d-flex">
            <button
              type="button"
              className={styles.sliderArrow}
              aria-label="Previous slide"
              onClick={scrollPrev}
            >
              <GoArrowLeft size={24} strokeWidth={2.5} />
            </button>

            <button
              type="button"
              className={styles.sliderArrow}
              aria-label="Next slide"
              onClick={scrollNext}
            >
              <GoArrowRight size={24} strokeWidth={2.5} />
            </button>
          </div>
        </div>
      </div>

      {isError && <p style={{ color: "red" }}>Something went wrong</p>}

      {!isError && (
        <div className={clsx(styles.embla, styles.emblaFade, "py-4")}>
          <div className={styles.emblaViewport} ref={emblaRef}>
            <div className={styles.emblaContainer}>
              {isLoading
                ? Array.from({ length: 5 }).map((_, index) => (
                    <div className={styles.emblaSlide} key={`shimmer-${index}`}>
                      <CustomerRatingShimmer />
                    </div>
                  ))
                : customerRatings?.map((rating) => (
                    <div className={styles.emblaSlide} key={rating.id}>
                      <CustomerRatingContainer customerRating={rating} />
                    </div>
                  ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RatingsContainer;
