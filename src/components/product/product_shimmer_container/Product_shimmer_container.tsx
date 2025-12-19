import clsx from "clsx";
import styles from "./Product_shimmer_container.module.css";

interface Props {
  className?: string;
}

const ProductShimmerContiner: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <div className={clsx(styles.imageCard, styles.animate)}></div>
      <div className={clsx(styles.stroke, styles.animate, styles.title)}></div>
      <div className={clsx(styles.stroke, styles.animate, styles.link)}></div>
      {/* <div
        className={clsx(styles.stroke, styles.animate, styles.description)}
      ></div> */}
    </div>
  );
};

export default ProductShimmerContiner;
