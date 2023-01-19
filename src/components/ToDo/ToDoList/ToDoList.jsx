import React from "react";
import styles from "./ToDoList.module.scss";

const ToDoList = ({ todos, onDeleteTodo }) => (
  <ul>
    {todos.map(({ id, text }) => (
      <li key={id} className={styles.item}>
        <p className={styles.text}>{text}</p>
        <button className={styles.delBtn} onClick={() => onDeleteTodo(id)}>
          Delete
        </button>
      </li>
    ))}
  </ul>
);
export default ToDoList;
