import clsx from "clsx";
import styles from "./Input_with_icon.module.css";
import { cloneElement, isValidElement, type ReactNode } from "react";

type InputWithIconProps = {
  className?: string;
  placeholder?: string;
  backgroundColor?: string;
  icon?: ReactNode;
};

const InputWithIcon: React.FC<InputWithIconProps> = ({
  className,
  placeholder = "",
  backgroundColor = "#f3f3f3",
  icon: icon,
}) => {
  const renderedIconElement = isValidElement(icon)
    ? cloneElement(icon, {
        className: clsx(styles.inputIcon, styles.icon),
      } as { className: string })
    : icon;

  return (
    <div className={clsx(styles.wrapper, className)}>
      {renderedIconElement}
      <input
        type="text"
        placeholder={placeholder}
        className={styles.input}
        style={{ backgroundColor }}
      />
    </div>
  );
};

export default InputWithIcon;
