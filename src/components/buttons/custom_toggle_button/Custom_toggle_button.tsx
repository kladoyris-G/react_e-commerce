import type { ReactNode } from "react";
import styles from "./Custom_toggle_button.module.css";
import clsx from "clsx";

type CustomToggleButtonProps = {
  label?: string;
  icon?: ReactNode;
  active?: boolean;
  className?: string;
  onClick?: () => void;
};

const CustomToggleButton: React.FC<CustomToggleButtonProps> = ({ label, icon, active = false, onClick,className }) => {
  return (
    <button
      onClick={onClick}
      className= { clsx( className,styles.button, active ? styles.active : "",)}
    >
      {icon && <span>{icon}</span>}
      {label && <span>{label}</span>}
    </button>
  );
};

export default CustomToggleButton;
