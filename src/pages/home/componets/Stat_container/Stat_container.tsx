import clsx from "clsx";
import styles from "./Stat_container.module.css";

interface Stat {
  statValue: number;
  title: string;
  className?: string;
}

const StatContainer: React.FC<Stat> = ({ statValue, title, className }) => {
  return (
    <div className={clsx(className, styles.statItem)}>
      <p className={styles.statValue}> {statValue}+</p>
      <p className={styles.title}> {title}</p>
    </div>
  );
};

export default StatContainer;
