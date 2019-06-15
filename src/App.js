import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/LayoutComponents/Header';
import AddTodo from './components/TodoComponents/AddTodo';
import Todos from './components/TodoComponents/Todos';
import About from './components/Pages/About';
import uuid from 'uuid';
// import axios from 'axios';

class App extends React.Component {
  state = {
    todos: [
      { id: uuid.v4(), title: 'Give Thanks', completed: false },
      { id: uuid.v4(), title: 'Sleep', completed: false },
      { id: uuid.v4(), title: 'Eat', completed: false },
      { id: uuid.v4(), title: 'Code', completed: false }
    ]
  };

  // componentDidMount() {
  //   axios
  //     .get('https://jsonplaceholder.typicode.com/todos?_limit=10')
  //     .then(response => this.setState({ todos: response.data }));
  // }
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
    return (
      <Router>
        <div className="App">
          <Header />
          <Route
            exact
            path="/"
            render={props => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo} />
                <Todos
                  todos={this.state.todos}
                  markComplete={this.markComplete}
                  deleteTodo={this.deleteTodo}
                />
              </React.Fragment>
            )}
          />
          <Route path="/about" component={About} />
        </div>
      </Router>
    );
  }
}

export default App;
