import styles from "./Hero_container.module.css";
import clsx from "clsx";
import homeImage from "/src/assets/images/home_image.png";
import StatContainer from "../Stat_container/Stat_container";

const HeroContainer: React.FC = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={clsx("mainContentWrapper pt-3")}>
        {/* Titles and Shop btn */}
        <div className="row ">
          <div className="col-sm">
            <div>
              <h1 className={styles.title}>
                FIND CLOTHES
                <br />
                THAT MATCHES
                <br />
                YOUR STYLE
              </h1>
              <p className={styles.subTitle}>
                Browse through our diverse range of meticulously crafted
                garments, designed to bring out your individuality and cater to
                your sense of style.
              </p>
              <div className="d-grid d-sm-block">
                <button
                  type="button"
                  className={clsx(
                    "btn btn-lg btn-primary rounded-pill px-5 ",
                    styles.shopBtn
                  )}
                >
                  <p className={styles.shopText}>Shop Now</p>
                </button>
              </div>
            </div>
            {/* Stats */}
            <div className="row justify-content-center justify-content-sm-start pt-3">
              <StatContainer
                title="International Brands"
                statValue={200}
                className="col-auto pb-2"
              />
              <StatContainer
                title="High-Quality Products"
                statValue={2000}
                className="col-auto pb-2"
              />
              <StatContainer
                title="Happy Customers"
                statValue={30000}
                className="col-auto pb-2"
              />
            </div>
          </div>
          <div className="col-sm-12 col-lg align-self-end pt-3 pt-lg-0">
            <div>
              <img src={homeImage} alt="Logo" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroContainer;
