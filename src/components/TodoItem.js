/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import styles from './TodoItem.module.css';

const TodoItem = (props) => {
  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  };
  const { completed, id, title } = props.todo;
  return (
    <li className={styles.item}>
      <input
        type="checkbox"
        className={styles.checkbox}
        checked={completed}
        onChange={() => props.handleChangeProps(id)}
      />
      <span style={completed ? completedStyle : null}>
        {title}
      </span>
      <button type="button" onClick={() => props.delTodoProps(id)}>Delete</button>
    </li>
  );
};

export default TodoItem;
