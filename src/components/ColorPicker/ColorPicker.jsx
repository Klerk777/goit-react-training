import React, { Component } from "react";
import ComponentTitle from "../ComponentTitle/ComponentTitle";
import styles from "./ColorPicker.module.scss";

export default class ColorPicker extends Component {
  state = {
    activeOptionIdx: 0,
  };

  setActiveIdx = (index) => {
    this.setState({ activeOptionIdx: index });
  };

  setActiveClass = (index) => {
    if (index === this.state.activeOptionIdx) {
      return `${styles.colorPicker__options} ${styles.active}`;
    } else {
      return styles.colorPicker__options;
    }
  };

  render() {
    const { activeOptionIdx } = this.state;
    const { options } = this.props;

    const { label } = options[activeOptionIdx];
    const { color } = options[activeOptionIdx];

    return (
      <>
        <ComponentTitle title="Color Picker" />
        <div className={styles.colorPicker}>
          <p className={styles.pickedColor}>
            Picked color: <span style={{ color: color }}>{label}</span>
          </p>
          {options.map(({ label, color }, index) => (
            <button
              key={label}
              onClick={() => this.setActiveIdx(index)}
              className={this.setActiveClass(index)}
              style={{ backgroundColor: color }}
            ></button>
          ))}
        </div>
      </>
    );
  }
}
