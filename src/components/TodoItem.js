import React from 'react';
import styles from "./TodoItem.module.css"
const TodoItem = (props) => {
  const completedStyle = {
    fontStyle: "italic",
    color: "#595959",
    opacity: 0.4,
    textDecoration: "line-through",
  }
  return( 
    <li className={styles.item}>
      <input 
        type="checkbox"
        className={styles.checkbox}
        checked={props.todo.completed}
        onChange={() => props.handleChangeProps(props.todo.id)}
      />
      <span style={props.todo.completed ? completedStyle : null}>
        {props.todo.title}
      </span>
      <button onClick={() => props.delTodoProps(props.todo.id)}>Delete</button>
    </li>
  );
}

export default TodoItem;