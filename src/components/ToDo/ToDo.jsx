import React, { Component } from "react";
import shortid from "shortid";
import ToDoList from "./ToDoList/ToDoList";
import initialTodos from "./data/todos.json";
import ComponentTitle from "../ComponentTitle/ComponentTitle";
import styles from "./ToDo.module.scss";
import ToDoEditor from "./ToDoEditor/ToDoEditor";
import Filter from "./Filter/Filter";

export default class ToDo extends Component {
  state = {
    todos: initialTodos,
    filter: "",
  };

  addTodo = (text) => {
    console.log("text :>> ", text);
    const todo = {
      id: shortid.generate(),
      text, //short property
      completed: false,
    };

    this.setState((prevState) => ({ todos: [...prevState.todos, todo] }));
  };

  deleteTodo = (todoId) => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((todo) => todo.id !== todoId),
    }));
  };

  toggleCompleted = (todoId) => {
    console.log("todoId :>> ", todoId);

    // this.setState((prevState) => ({
    //   todos: prevState.todos.map((todo) => {
    //     if (todo.id === todoId) {
    //       console.log("Finde todo wich we need");
    //       return { ...todo, completed: !todo.completed };
    //     }
    //     return todo;
    //   }),
    // }));

    // --------Same with ternary operator---------
    this.setState((prevState) => ({
      todos: prevState.todos.map((todo) =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      ),
    }));
  };

  changeFilter = (e) => {
    this.setState({ filter: e.target.value });
  };

  getFilteredTodos = () => {
    const { todos, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return todos.filter((todo) =>
      todo.text.toLowerCase().includes(normalizedFilter)
    );
  };

  calculateCompletedTodos = () => {
    const { todos } = this.state;
    return todos.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0
    );
  };

  render() {
    const { todos, filter } = this.state;
    const totalTodoCount = todos.length;
    const completedTodoCount = this.calculateCompletedTodos();
    const filteredTodos = this.getFilteredTodos();

    return (
      <>
        <ComponentTitle title="Todo" />
        <div className={styles.todoConteiner}>
          <div className={styles.todoInfoConteiner}>
            <p className={styles.info}>Загальна кількість: {totalTodoCount}</p>
            <p className={styles.info}>Виповнених: {completedTodoCount}</p>
            <p className={styles.info}>
              До виконання: {totalTodoCount - completedTodoCount}
            </p>
          </div>
          <ToDoEditor onSubmit={this.addTodo} />
          <Filter value={filter} onChange={this.changeFilter} />
          <ToDoList
            todos={filteredTodos}
            onDeleteTodo={this.deleteTodo}
            onToggleCompleted={this.toggleCompleted}
          />
        </div>
      </>
    );
  }
}
