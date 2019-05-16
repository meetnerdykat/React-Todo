import React from 'react';
import './Todos.css';

function AddTodo() {
  return (
    <form className="small-container">
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control form-control-lg"
          placeholder="Add a todo ... "
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
        />

        <div class="input-group-append">
          <button class="btn btn-dark" type="submit" id="button-addon2">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default AddTodo;
