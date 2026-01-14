import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import styles from "./Ratings_container.module.css";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback } from "react";
import clsx from "clsx";

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

      {/* Slider with fade */}
      <div className={clsx(styles.embla, styles.emblaFade, "py-4")}>
        <div className={styles.emblaViewport} ref={emblaRef}>
          <div className={styles.emblaContainer}>
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div className={styles.emblaSlide} key={item}>
                <div className="card p-4">
                  ⭐⭐⭐⭐⭐
                  <p>Customer review #{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RatingsContainer;
