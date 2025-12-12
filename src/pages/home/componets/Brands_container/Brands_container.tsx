import clsx from "clsx";
import versace from "../../../../assets/svgs/brands/versace.svg";
import zara from "../../../../assets/svgs/brands/zara.svg";
import gucci from "../../../../assets/svgs/brands/gucci.svg";
import prada from "../../../../assets/svgs/brands/prada.svg";
import calvinKlein from "../../../../assets/svgs/brands/calvin_klein.svg";
import styles from "./Brands_container.module.css";

const BrandsContainer: React.FC = () => {
  return (
    <div className={clsx(styles.brandsContainer)}>
      <div className="mainContentWrapper">
        <div
          className={clsx(
            "d-flex flex-row flex-wrap justify-content-around py-4 "
          )}
        >
          <div className="col-auto align-self-center py-2">
            <img src={versace} alt="versace" />
          </div>
          <div className="col-auto align-self-center px-4 py-2 ">
            <img src={zara} alt="zara" />
          </div>
          <div className="col-auto align-self-center py-2 ">
            <img src={gucci} alt="gucci" />
          </div>
          <div className="col-auto align-self-center px-4 py-2 ">
            <img src={prada} alt="prada" />
          </div>
          <div className="col-auto align-self-center py-2 ">
            <img src={calvinKlein} alt="calvin klein" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandsContainer;
