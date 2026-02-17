import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
} from "react";
import clsx from "clsx";
import styles from "./Footer.module.css";
import InputWithIcon from "@components/inputs/input_with_icon/Input_with_icon";
import { MdOutlineEmail } from "react-icons/md";

const Footer: React.FC = () => {
  const newsletterRef = useRef<HTMLDivElement | null>(null);
  const [halfNewsletterHeight, setHalfNewsletterHeight] = useState(72);

  useEffect(() => {
    const newsletterEl = newsletterRef.current;

    if (!newsletterEl) {
      return;
    }

    const updateOverlap = () => {
      setHalfNewsletterHeight(newsletterEl.offsetHeight / 2);
    };

    updateOverlap();

    const resizeObserver = new ResizeObserver(updateOverlap);
    resizeObserver.observe(newsletterEl);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  const footerStyle = useMemo(
    () =>
      ({
        "--newsletter-overlap": `${halfNewsletterHeight}px`,
      }) as CSSProperties,
    [halfNewsletterHeight],
  );

  return (
    <footer className={styles.footer} style={footerStyle}>
      <div
        ref={newsletterRef}
        className={clsx("mainContentWrapper ", styles.newsletter)}
      >
        <div className="row p-5">
          <div className={clsx("col-12 col-md-6", styles.newsletterText)}>
            STAY UP TO DATE ABOUT OUR LATEST OFFERS
          </div>
          <div className="col-12 col-md-6 mt-4 mt-lg-0">
            <InputWithIcon
              placeholder="Enter your email address"
              icon={<MdOutlineEmail size={24} />}
            />

            <div className="d-flex justify-content-center pt-2 px-2">
              <button
                type="button"
                className={clsx("btn-lg rounded-pill p-2 w-100")}
              >
                <p className={styles.newsletterTextBtn}>
                  Subscribe to Newsletter
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footerWrapper}>
        <div>
          <h1>Social</h1>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
