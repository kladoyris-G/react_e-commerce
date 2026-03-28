import clsx from "clsx";
import styles from "./Animated_pill_button.module.css";

type AnimatedPillButtonProps = {
  label: string;
  type?: "button" | "submit" | "reset";
  className?: string;
  labelClassName?: string;
  wrapperClassName?: string;
  onClick?: () => void;
};

const AnimatedPillButton: React.FC<AnimatedPillButtonProps> = ({
  label,
  type = "button",
  className,
  labelClassName,
  wrapperClassName,
  onClick,
}) => {
  return (
    <div className={clsx("d-flex justify-content-center pt-2", wrapperClassName)}>
      <button
        type={type}
        className={clsx("btn-lg rounded-pill  px-5 ",  styles.viewAllBtn, className)}
        onClick={onClick}
      >
        <p className={clsx( styles.viewAllext, labelClassName)}>{label}</p>
      </button>
    </div>
  );
};

export default AnimatedPillButton;
