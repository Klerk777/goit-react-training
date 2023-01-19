import styles from "./ComponentTitle.module.scss";

export default function ComponentTitle({ title }) {
  return <h2 className={styles.title}>{title}</h2>;
}
