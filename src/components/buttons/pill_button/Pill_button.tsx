import clsx from "clsx";
import styles from "./Pill_button.module.css";

type PillButtonProps = {
  label: string;
  type?: "button" | "submit" | "reset";
  className?: string;
  labelClassName?: string;
  wrapperClassName?: string;
  onClick?: () => void;
};

const PillButton: React.FC<PillButtonProps> = ({
  label,
  type = "button",
  className,
  labelClassName,
  wrapperClassName,
  onClick,
}) => {
  return (
    <div className={clsx("d-flex justify-content-center pt-2 px-2", wrapperClassName)}>
      <button
        type={type}
        className={clsx("btn-lg rounded-pill p-2 w-100", className)}
        onClick={onClick}
      >
        <p className={clsx(styles.label, labelClassName)}>{label}</p>
      </button>
    </div>
  );
};

export default PillButton;
