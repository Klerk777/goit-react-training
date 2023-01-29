import React, { Component } from "react";
import { nanoid } from "nanoid";
import Section from "../ComponentTitle/Section";
import styles from "./SignUpForm.module.scss";

const Gender = {
  MALE: "male",
  FEMALE: "female",
};

const INITIAL_STATE = {
  login: "",
  email: "",
  password: "",
  gender: null,
  age: "",
  agreed: false,
};

export default class SignUpForm extends Component {
  state = { ...INITIAL_STATE };

  handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    this.setState({ [name]: type === "checkbox" ? checked : value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { login, email, password, agreed, age, gender } = this.state;
    console.table(
      `Login: ${login}, Email: ${email}, Password: ${password}, Gender: ${gender}, Age: ${age}, Agreed: ${agreed}  `
    );
    this.reset();
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  loginInputId = nanoid();
  emailInputId = nanoid();
  passwordInputId = nanoid();

  render() {
    const { login, email, password, gender, age, agreed } = this.state;

    return (
      <Section title="SignUpForm">
        <form
          className={styles.form}
          autoComplete="on"
          onSubmit={this.handleSubmit}
        >
          <label htmlFor={this.loginInputId}>Name</label>
          <input
            className={styles.input}
            type="text"
            placeholder="Enter name"
            name="login"
            id={this.loginInputId}
            value={login}
            onChange={this.handleChange}
          />

          <label htmlFor={this.emailInputId}>Email</label>
          <input
            className={styles.input}
            type="email"
            placeholder="Enter email"
            name="email"
            id={this.emailInputId}
            value={email}
            onChange={this.handleChange}
          />

          <label htmlFor={this.passwordInputId}>Password</label>
          <input
            className={styles.input}
            type="password"
            placeholder="Enter password"
            name="password"
            id={this.passwordInputId}
            value={password}
            onChange={this.handleChange}
          />

          <section className={styles.genderCheck}>
            <h4>Choose your gender</h4>
            <label className={styles.genderLabel}>
              Male
              <input
                className={styles.genderInput}
                type="radio"
                checked={gender === Gender.MALE}
                name="gender"
                value={Gender.MALE}
                onChange={this.handleChange}
              />
            </label>
            <label className={styles.genderLabel}>
              Female
              <input
                className={styles.genderInput}
                type="radio"
                checked={gender === Gender.FEMALE}
                name="gender"
                value={Gender.FEMALE}
                onChange={this.handleChange}
              />
            </label>
          </section>

          <label>
            Choose your age
            <select
              className={styles.inputAge}
              name="age"
              value={age}
              onChange={this.handleChange}
            >
              <option value="" disabled>
                ...
              </option>
              <option value="18-25">18-25</option>
              <option value="26-35">26-35</option>
              <option value="36+">36+</option>
            </select>
          </label>

          <label className={styles.checkboxWrap}>
            Agree to terms{" "}
            <input
              className={styles.checkbox}
              type="checkbox"
              name="agreed"
              checked={agreed}
              onChange={this.handleChange}
            />
          </label>

          <button className={styles.btn} disabled={!agreed}>
            Sign up as {login}
          </button>
        </form>
      </Section>
    );
  }
}
