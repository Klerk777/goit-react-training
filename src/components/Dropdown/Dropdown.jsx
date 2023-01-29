import React, { Component } from "react";
import styles from "./Dropdown.module.scss";
import Section from "../ComponentTitle/Section";

export default class Dropdown extends Component {
  state = {
    visible: false,
  };

  toggle = () => {
    this.setState((prevState) => ({ visible: !prevState.visible }));
  };

  /*   show = () => {
    this.setState({ visible: true });
    setTimeout(
      () => console.log("this.state.visible", this.state.visible),
      500
    );
  };

  hide = () => {
    this.setState({ visible: false });
    setTimeout(
      () => console.log("this.state.visible", this.state.visible),
      500
    );
  }; */

  render() {
    const { visible } = this.state;

    return (
      <Section title="Dropdown menu">
        <div className={styles.dropdownConteiner}>
          <button className={styles.btn} onClick={this.toggle}>
            {visible ? "Hide" : "Show"}
          </button>
          {visible && <ul className={styles.menu}>Dropdown menu</ul>}
        </div>
      </Section>
    );
  }
}
