import React from "react";
import styles from "./ToDoList.module.scss";

const ToDoList = ({ todos, onDeleteTodo, onToggleCompleted }) => (
  <ul>
    {todos.map(({ id, text, completed }) => (
      <li
        key={id}
        className={
          completed ? `${styles.item} ${styles.completed}` : styles.item
        }
      >
        <input
          type="checkbox"
          className={styles.todoCheckbox}
          checked={completed}
          onChange={() => {
            onToggleCompleted(id);
          }}
        />
        <p className={styles.text}>{text}</p>
        <button className={styles.delBtn} onClick={() => onDeleteTodo(id)}>
          Delete
        </button>
      </li>
    ))}
  </ul>
);
export default ToDoList;
