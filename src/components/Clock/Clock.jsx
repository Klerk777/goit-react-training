import React, { Component } from "react";
import styles from "./Clock.module.scss";

export default class Clock extends Component {
  state = {
    time: new Date().toLocaleTimeString(),
  };

  intervalId = null;

  componentDidMount() {
    console.log("set interval");
    this.intervalId = setInterval(() => {
      this.setState({ time: new Date().toLocaleTimeString() });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId); // clear interval, when component unvount
  }
  render() {
    const { time } = this.state;
    return <div className={styles.clock}>{time}</div>;
  }
}
