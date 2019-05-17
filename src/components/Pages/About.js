import React from 'react';

function About() {
  return (
    <div className="container text-left text-dark">
      <div className="row">
        <div className="col-sm-12 col-md-8 offset-md-2 my-5">
          {' '}
          <p className="lead text-center">
            This Todo App is a Lambda School Assignment. We as students were
            tasked with creating a Todo App that allows the user the abilitiy
            to:
          </p>
        </div>
        <div className="col-sm-12 col-md-6">
          {' '}
          <h3 className="mb-2">The Goals</h3>
          <p className="mb-4">The goals I achieved are as follows:</p>
          <ul className="text-left bg-dark text-light rounded">
            <li className="list-group-item bg-transparent">
              See a list of Todos
            </li>
            <li className="list-group-item bg-transparent">
              Input a todo via an input field
            </li>
            <li className="list-group-item bg-transparent">
              Press a submit button to add the todo to the list
            </li>
            <li className="list-group-item bg-transparent">
              Delete the todo once it's been completed
            </li>
          </ul>
        </div>
        <div className="col-sm-12 col-md-6">
          <h3>What This Project Taught Me</h3>
          <p className="mb-4">
            The learning objectives that I met are as follows:
          </p>
          <ul className="text-left bg-dark text-light rounded">
            <li className="list-group-item bg-transparent">
              Create, read and update a component's state object
            </li>
            <li className="list-group-item bg-transparent">
              Describe the rules of the `setState` function and demonstrate two
              ways to properly use it
            </li>
            <li className="list-group-item bg-transparent">
              Implement reusable and nested class components
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
