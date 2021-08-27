/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/state-in-constructor */
import React from 'react';
import { FaPlusCircle } from 'react-icons/fa';

class InputTodo extends React.PureComponent {
  state = {
    title: '',
  }

  onChange = (e) => {
    this.setState({
      title: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.title.trim()) {
      this.props.addTodoProps(this.state.title);
      this.setState({
        title: '',
      });
    } else {
      alert('Please write item');
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Add Todo..." className="input-text" value={this.state.title} onChange={this.onChange} />
        <button type="submit" className="input-submit">
          <FaPlusCircle
            style={{ color: 'darkcyan', fontSize: '20px', marginTop: '2px' }}
          />
        </button>
      </form>
    );
  }
}
export default InputTodo;
