import React, { Component } from 'react';
import './Todos.css';
import PropTypes from 'prop-types';

class ToDoItem extends Component {
  // getStyle = () => {
  //   // check to see if completed is true, if it is, put a line through item
  //   if (this.props.todo.completed) {
  //     return {
  //       textDecoration: 'line-through'
  //     };
  //   } else {
  //     return {
  //       textDecoration: 'none'
  //     };
  //   }
  // };

  getStyle = () => {
    // check to see if completed is true, if it is, put a line through item
    // shorter version of code commented out above
    return {
      textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    };
  };

  render() {
    const { id, title } = this.props.todo;
    return (
      // <div style={this.getStyle()}></div>

      <div
        style={this.getStyle()}
        className="my-3 p-2 border-transparent rounded d-flex justify-content-between align-items-center bg-dark small-container"
      >
        <p className="m-0">
          <input
            type="checkbox"
            className="mr-1"
            onChange={this.props.markComplete.bind(this, id)}
          />{' '}
          {title}
        </p>
        <button
          onClick={this.props.deleteTodo.bind(this, id)}
          type="button"
          className="btn btn-light rounded-circle"
        >
          <i className="fas fa-trash text-dark" />
        </button>
      </div>
    );
  }
}

ToDoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired
};

export default ToDoItem;
