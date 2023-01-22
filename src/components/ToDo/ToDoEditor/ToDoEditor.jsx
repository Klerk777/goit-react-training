import React, { Component } from "react";
import styles from "./ToDoEditor.module.scss";

export default class ToDoEditor extends Component {
  state = {
    newTaskText: "",
  };

  hendleChange = (e) => {
    this.setState({ newTaskText: e.target.value });
  };

  hendleSubmit = (e) => {
    const { newTaskText } = this.state;
    e.preventDefault();
    console.log("this.state.newTaskText", newTaskText);
    this.props.onSubmit(newTaskText);
    this.setState({ newTaskText: "" });
  };

  render() {
    const { newTaskText } = this.state;

    return (
      <form className={styles.todoEditor} onSubmit={this.hendleSubmit}>
        <textarea value={newTaskText} onChange={this.hendleChange} />
        <button type="submit" className={styles.todoEditorBtn}>
          Add new task
        </button>
      </form>
    );
  }
}
