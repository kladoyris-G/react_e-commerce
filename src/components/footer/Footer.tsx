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
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import visa from "@assets/svgs/payments/visa.svg";
import masterCard from "@assets/svgs/payments/master_card.svg";
import paypal from "@assets/svgs/payments/paypal.svg";
import applePay from "@assets/svgs/payments/apple_pay.svg";
import googlePay from "@assets/svgs/payments/google_pay.svg";

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
      {/* =-=-=-=-=-=-= News Latter =-=-=-=-=-=-= */}
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
      {/* =-=-=-=-=-=-= Footer Links =-=-=-=-=-=-= */}

      <div className={styles.footerWrapper}>
        <div className={clsx("mainContentWrapper mt-4")}>
          <div className="row">
            {/* =-=-= Social =-=-= */}
            <div className={clsx("col-12 col-lg-4")}>
              <h1 className={styles.brandText}>SHOP.CO</h1>
              <p className={styles.footerText}>
                We have clothes that suits your style and which you’re proud to
                wear. From women to men.
              </p>
              <div className="d-flex">
                <FaTwitter
                  className="border border-secondary rounded-circle p-1 "
                  size={24}
                />

                <FaFacebook className="mx-2" size={24} />
                <FaInstagram
                  className="border border-secondary rounded-circle p-1 "
                  size={24}
                />
                <FaGithub
                  className="border border-secondary rounded-circle p-1 mx-2 "
                  size={24}
                />
              </div>
            </div>
            {/* =-=-= Links =-=-= */}
            <div className={clsx("col-12 col-lg-8 mt-4 mt-lg-0")}>
              <div className="row justify-content-between justify-content-lg-around">
                <div className={clsx("col-6 col-md-2")}>
                  <h3 className={styles.footerTitle}>Company</h3>
                  <div>
                    <a href="#" className={styles.footerText}>
                      About
                    </a>
                  </div>
                  <div className="my-2">
                    <a href="#" className={styles.footerText}>
                      Features
                    </a>
                  </div>
                  <div>
                    <a href="#" className={styles.footerText}>
                      Works
                    </a>
                  </div>
                  <div className="my-2">
                    <a href="#" className={styles.footerText}>
                      Career
                    </a>
                  </div>
                </div>
                <div className={clsx("col-6 col-md-2")}>
                  <h3 className={styles.footerTitle}>Help</h3>
                  <div>
                    <a href="#" className={styles.footerText}>
                      Customer Support
                    </a>
                  </div>
                  <div className="my-2">
                    <a href="#" className={styles.footerText}>
                      Delivery Details
                    </a>
                  </div>
                  <div>
                    <a href="#" className={styles.footerText}>
                      Terms & Conditions
                    </a>
                  </div>
                  <div className="my-2">
                    <a href="#" className={styles.footerText}>
                      Privacy Policy
                    </a>
                  </div>
                </div>
                <div className={clsx("col-6 col-md-2 mt-4 mt-lg-0")}>
                  <h3 className={styles.footerTitle}>FAQ</h3>
                  <div>
                    <a href="#" className={styles.footerText}>
                      Account
                    </a>
                  </div>
                  <div className="my-2">
                    <a href="#" className={styles.footerText}>
                      Manage Deliveries
                    </a>
                  </div>
                  <div>
                    <a href="#" className={styles.footerText}>
                      Orders
                    </a>
                  </div>
                  <div className="my-2">
                    <a href="#" className={styles.footerText}>
                      Payments
                    </a>
                  </div>
                </div>
                <div className={clsx("col-6 col-md-2 mt-4 mt-lg-0")}>
                  <h3 className={styles.footerTitle}>Resources</h3>
                  <div>
                    <a href="#" className={styles.footerText}>
                      Free eBooks
                    </a>
                  </div>
                  <div className="my-2">
                    <a href="#" className={styles.footerText}>
                      Development Tutorial
                    </a>
                  </div>
                  <div>
                    <a href="#" className={styles.footerText}>
                      How to - Blog
                    </a>
                  </div>
                  <div className="my-2">
                    <a href="#" className={styles.footerText}>
                      Youtube Playlist
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* =-=-= Payments Methods =-=-= */}
          <hr />
          <div className="row">
            <div className={clsx("col-12 col-md-6 ")}>
              <p
                className={clsx(
                  styles.footerText,
                  "text-center text-md-start mt-md-1",
                )}
              >
                Shop.co © 2000-{new Date().getFullYear()}, All Rights Reserved
              </p>
            </div>
            <div className={clsx("col-12 col-md-6 ")}>
              <div className="d-flex justify-content-center justify-content-md-end">
                <img src={visa} alt="visa" />
                <img src={masterCard} alt="masterCard" />
                <img src={paypal} alt="paypal" />
                <img src={applePay} alt="applePay" />
                <img src={googlePay} alt="googlePay" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
