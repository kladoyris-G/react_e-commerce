import styles from "./Dress_style_section.module.css";
import clsx from "clsx";

const DressStyleContainer: React.FC = () => {
  return (
    <div className="mainContentWrapper">
      <div className={clsx("pb-4", styles.container)}>
        <h1 className={clsx("title py-5")}>BROWSE BY dress STYLE</h1>

        <div className="row px-4  gy-3 ">
          <div className="col-md-5">
            <div
              className={clsx(
                "col-md-12  ",
                styles.styleContainer,
                styles.casual
              )}
            >
              <h4 className={clsx("p-3", styles.styleTitle)}>Casual</h4>
            </div>
          </div>
          <div className="col-md-7">
            <div
              className={clsx(
                "col-md-12  ",
                styles.styleContainer,
                styles.formal
              )}
            >
              <h4 className={clsx("p-3", styles.styleTitle)}>Formal</h4>
            </div>
          </div>
        </div>

        <div className="row px-4  gy-3 py-3">
          <div className="col-md-7">
            <div
              className={clsx(
                "col-md-12  ",
                styles.styleContainer,
                styles.party
              )}
            >
              <h4 className={clsx("p-3", styles.styleTitle)}>Party</h4>
            </div>
          </div>
          <div className="col-md-5">
            <div
              className={clsx("col-md-12  ", styles.styleContainer, styles.gym)}
            >
              <h4 className={clsx("p-3", styles.styleTitle)}>Gym</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DressStyleContainer;
