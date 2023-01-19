import React, { Component } from "react";
import styles from "./Dropdown.module.scss";
import ComponentTitle from "../ComponentTitle/ComponentTitle";

export default class Dropdown extends Component {
  state = {
    visible: false,
  };

  togle = () => {
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
      <>
        <ComponentTitle title="Dropdown menu" />
        <div className={styles.dropdownConteiner}>
          <button className={styles.btn} onClick={this.togle}>
            {visible ? "Hide" : "Show"}
          </button>
          {visible && <ul className={styles.menu}>Dropdown menu</ul>}
        </div>
      </>
    );
  }
}
