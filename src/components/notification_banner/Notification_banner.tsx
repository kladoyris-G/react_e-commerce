import { useState } from "react";
import styles from "./Notification_banner.module.css";

export default function NotificationBanner() {
  const [visible, setVisible] = useState(true);

  // ? =-=-= Hide Banner =-=-=
  if (!visible) return null;

  return (
    <div className={styles.container}>
      <p className={styles.message}>
        Sign up and get 20% off to your first order. <span>Sign Up Now</span>
      </p>

      <button className={styles.close} onClick={() => setVisible(false)}>
        X
      </button>
    </div>
  );
}
