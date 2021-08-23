import React from "react"

class InputTodo extends React.PureComponent {
  state = {
    title:''
  }
  onChange = e => {
    this.setState({
      title: e.target.value  
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state.title);
  };
  
  handleSubmit = e => {
    e.preventDefault();
    if(this.state.title.trim()){
      this.props.addTodoProps(this.state.title);
      this.setState({  
        title: ''
      });
    } else {
      alert('Please write item');
    }
    
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Add Todo..." className='input-text' value={this.state.title} onChange={this.onChange}/>
        <button type="submit">Submit</button>
      </form>
    )
  }
}
export default InputTodo