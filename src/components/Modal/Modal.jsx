import React, { Component } from "react";
import styles from "./Modal.module.scss";

export default class Modal extends Component {
  componentDidMount() {
    console.log("Modal componentDidMount");
  }

  componentWillUnmount() {
    console.log("Modal componentWillUnmount");
  }

  render() {
    return (
      <>
        <div className={styles.modalBackdrop}>
          <div className={styles.modalContent}>{this.props.children}</div>
        </div>
      </>
    );
  }
}
