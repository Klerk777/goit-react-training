import styles from "./Section.module.scss";
import PropTypes from "prop-types";

export default function Section({ title, level = "2", children }) {
  const CustomTag = `h${level}`;

  return (
    <section className={styles.section}>
      <CustomTag className={styles.title}>{title}</CustomTag>
      {children}
    </section>
  );
}
Section.propTypes = {
  title: PropTypes.string,
  level: PropTypes.string,
};
