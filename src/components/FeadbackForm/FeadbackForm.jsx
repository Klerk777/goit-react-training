//
// ================== Hooks ===================
// Aomponent that saves the state of the form fields in local storage

import { useState, useEffect } from "react";
import styles from "./FeadbackForm.module.scss";

const useLocalStorage = (key, defaultValue) => {
  const [state, setState] = useState(() => {
    return JSON.parse(window.localStorage.getItem(key)) ?? defaultValue;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
};

export default function FeadbackForm() {
  const [email, setEmail] = useLocalStorage("email", "");
  const [message, setMessage] = useLocalStorage("message", "");

  const handleChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "email":
        setEmail(value);
        break;

      case "message":
        setMessage(value);
        break;

      default:
        break;
    }
  };

  return (
    <form className={styles.form}>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
      </label>
      <textarea
        name="message"
        value={message}
        onChange={handleChange}
        cols="30"
        rows="10"
      ></textarea>
      <button type="submit">Send meesage</button>
    </form>
  );
}
