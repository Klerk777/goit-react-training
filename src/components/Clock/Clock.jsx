// import React, { Component } from "react";
import { useState, useEffect, useRef } from "react";
import styles from "./Clock.module.scss";

export default function Clock() {
  const [time, setTime] = useState(() => new Date());
  const intervalId = useRef(null);

  useEffect(() => {
    intervalId.current = setInterval(() => {
      // console.log("This is an interval each 1000 ms " + Date.now());

      setTime(new Date());
    }, 1000);

    return () => {
      console.log("Will be executed before the next run useEffect");
      stop();
    };
  }, []);

  const stop = () => {
    clearInterval(intervalId.current);
  };

  return (
    <div>
      <div className={styles.clock}>{time.toLocaleTimeString()}</div>
      <button type="button" onClick={stop}>
        Stop
      </button>
    </div>
  );
}

//------------------------ with classComponent --------------------------------------
// class OldClock extends Component {
//   state = {
//     time: new Date().toLocaleTimeString(),
//   };

//   intervalId = null;

//   componentDidMount() {
//     console.log("set interval");
//     this.intervalId = setInterval(() => {
//       this.setState({ time: new Date().toLocaleTimeString() });
//     }, 1000);
//   }

//   componentWillUnmount() {
//     clearInterval(this.intervalId); // clear interval, when component unmount
//   }
//   render() {
//     const { time } = this.state;
//     return <div className={styles.clock}>{time}</div>;
//   }
// }
