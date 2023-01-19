import React from "react";
import styles from "./Controls.module.scss";

const Controls = ({ step, onDecrement, onIncrement }) => (
  <div className={styles.controls}>
    <button className={styles.counterBtn} type="button" onClick={onDecrement}>
      Decrement by {step}
    </button>

    <button className={styles.counterBtn} type="button" onClick={onIncrement}>
      Increment by {step}
    </button>
  </div>
);

export default Controls;
