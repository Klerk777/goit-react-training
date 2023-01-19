import PropTypes from "prop-types";
import React, { Component } from "react";

export class MyClassComponent extends Component {
  static propTypes = {};

  render() {
    return (
      <div>
        MyClassComponent
        <button onClick={(event) => console.log(event)}>Click me!</button>
      </div>
    );
  }
}

export default MyClassComponent;
