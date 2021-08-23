/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import TodoItem from './TodoItem';

class TodoList extends React.PureComponent {
  render() {
    return (
      <ul>
        {this.props.todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            handleChangeProps={this.props.handleChangeProps}
            delTodoProps={this.props.delTodoProps}
          />
        ))}
      </ul>
    );
  }
}

export default TodoList;
