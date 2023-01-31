import React, { Component } from "react";
import styles from "./Modal.module.scss";
import { createPortal } from "react-dom";

const modalRoot = document.getElementById("modal-root");
export default class Modal extends Component {
  componentDidMount() {
    console.log("Modal componentDidMount");
    window.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    console.log("Modal componentWillUnmount");
    window.removeEventListener("keydown", this.handleKeyDown); //unregistering listener when component unmount
  }

  handleKeyDown = (e) => {
    if (e.code === "Escape") {
      console.log("ESC pressed. Need to close modal.");
      this.props.onClose();
    }
  };

  handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <div className={styles.modalBackdrop} onClick={this.handleBackdropClick}>
        <div className={styles.modalContent}>{this.props.children}</div>
      </div>,
      modalRoot
    );
  }
}
