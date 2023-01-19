import React from "react";
import styles from "./Value.module.scss";

const Value = ({ value }) => <span className={styles.result}>{value}</span>;
export default Value;
