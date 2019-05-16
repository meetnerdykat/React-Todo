import React, { Component } from 'react';
import './Todos.css';

class AddTodo extends Component {
  state = {
    title: ''
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: '' });
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <form onSubmit={this.onSubmit} className="small-container">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Add a todo ... "
            name="title"
            value={this.state.title}
            onChange={this.onChange}
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
          />

          <div className="input-group-append">
            <button className="btn btn-dark" type="submit" id="button-addon2">
              Submit
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default AddTodo;
