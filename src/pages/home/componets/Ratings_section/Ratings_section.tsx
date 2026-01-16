import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import styles from "./Ratings_section.module.css";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback } from "react";
import clsx from "clsx";
import { useGetRatingsQuery } from "@services/server_api/Ratings_api";

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
    ]
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

      {isLoading && (
        <div className="d-flex flex-row flex-wrap justify-content-around py-4">
          {/* {Array.from({ length: 4 }).map((_, i) => (
            <ProductShimmerContiner key={i} />
          ))} */}
          Loading...
        </div>
      )}

      {isError && <p style={{ color: "red" }}>Something went wrong</p>}

      {!isLoading && !isError && (
        <div className={clsx(styles.embla, styles.emblaFade, "py-4")}>
          <div className={styles.emblaViewport} ref={emblaRef}>
            <div className={styles.emblaContainer}>
              {customerRatings?.map((rating) => (
                <div className={styles.emblaSlide} key={rating.id}>
                  <div className="card p-4">
                    ⭐⭐⭐⭐⭐
                    <p>{rating.comment}</p>
                  </div>
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
