import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/LayoutComponents/Header';
import AddTodo from './components/TodoComponents/AddTodo';
import Todos from './components/TodoComponents/Todos';
import About from './components/Pages/About';
import uuid from 'uuid';

class App extends React.Component {
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: 'Pray and give thanks',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Go for a run',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Shower',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Make smoothies',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Take kids to school',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Go to work',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Go to school & code',
        completed: false
      }
    ]
  };
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  // Toggle Todo item to complete or not complete
  markComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };

  // Delete Todo item
  deleteTodo = id => {
    // this is going to filter out the one I'm deleting
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    });
  };

  // Add Todo item
  addTodo = title => {
    const newTodo = {
      id: uuid.v4(),
      title: title,
      completed: false
    };
    this.setState({ todos: [...this.state.todos, newTodo] });
  };

  render() {
    console.log(this.state.todos);
    return (
      <Router>
        <div className="App">
          <Header />
          <Route
            exact
            path="/"
            render={props => (
              <React.Fragment>
                <div className="mx-4">
                  <AddTodo addTodo={this.addTodo} />
                  <Todos
                    todos={this.state.todos}
                    markComplete={this.markComplete}
                    deleteTodo={this.deleteTodo}
                  />
                </div>
              </React.Fragment>
            )}
          />
        </div>
        <Route path="/about" component={About} />
      </Router>
    );
  }
}

export default App;
