import styles from "./Counter.module.scss";
import React, { Component } from "react";
import Value from "./Value/Value";
import Controls from "./Controls/Controls";

class Counter extends Component {
  static defaultProps = {
    step: 1,
    initialValue: 0,
  };

  state = {
    value: this.props.initialValue,
  };

  handleIncrement = () => {
    this.setState((state, props) => ({
      value: state.value + props.step,
    }));
  };

  handleDecrement = () => {
    this.setState((state, props) => ({
      value: state.value - props.step,
    }));
  };

  render() {
    const { step } = this.props;
    return (
      <div className={styles.counterConteiner}>
        <h2 className={styles.title}>Counter</h2>
        <Value value={this.state.value} />
        <Controls
          step={step}
          onDecrement={this.handleDecrement}
          onIncrement={this.handleIncrement}
        />
      </div>
    );
  }
}

export default Counter;

/*
The Counter component is small enough not to split into smaller components.
This was done for an example realisation of the state hoisting pattern (state hoisting up). 
[Підйом стану при композиції]*/
