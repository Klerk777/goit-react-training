import React, { Component } from "react";
import ToDoList from "./ToDoList/ToDoList";
import initialTodos from "./data/todos.json";
import ComponentTitle from "../ComponentTitle/ComponentTitle";
import styles from "./ToDo.module.scss";

export default class ToDo extends Component {
  state = {
    todos: initialTodos,
  };

  deleteTodo = (todoId) => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((todo) => todo.id !== todoId),
    }));
  };

  render() {
    const { todos } = this.state;

    const totalTodoCount = todos.length;
    const completedTodoCount = todos.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0
    );

    return (
      <>
        <ComponentTitle title="Todo" />
        <div className={styles.todoConteiner}>
          <div className={styles.todoInfoConteiner}>
            <p className={styles.info}>Загальна кількість: {totalTodoCount}</p>
            <p className={styles.info}>Виповнених: {completedTodoCount}</p>
          </div>
          <ToDoList todos={todos} onDeleteTodo={this.deleteTodo} />
        </div>
      </>
    );
  }
}
