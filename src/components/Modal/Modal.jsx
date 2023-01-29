import React, { Component } from "react";
import styles from "./Modal.module.scss";
import { createPortal } from "react-dom";

const modalRoot = document.getElementById("modal-root");
export default class Modal extends Component {
  componentDidMount() {
    console.log("Modal componentDidMount");
  }

  componentWillUnmount() {
    console.log("Modal componentWillUnmount");
  }

  render() {
    return createPortal(
      <div className={styles.modalBackdrop}>
        <div className={styles.modalContent}>{this.props.children}</div>
      </div>,
      modalRoot
    );
  }
}
