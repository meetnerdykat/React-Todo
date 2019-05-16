import React from 'react';
import './App.css';
import Header from './components/LayoutComponents/Header';
import AddTodo from './components/TodoComponents/AddTodo';
import Todos from './components/TodoComponents/Todos';

class App extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Pray and give thanks',
        completed: false
      },
      {
        id: 2,
        title: 'Go for a run',
        completed: false
      },
      {
        id: 3,
        title: 'Shower',
        completed: false
      },
      {
        id: 4,
        title: 'Make smoothies',
        completed: false
      },
      {
        id: 5,
        title: 'Take kids to school',
        completed: false
      },
      {
        id: 6,
        title: 'Go to work',
        completed: false
      },
      {
        id: 7,
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

  render() {
    console.log(this.state.todos);
    return (
      <div className="App">
        <Header />
        <div className="mx-4">
          <AddTodo />
          <Todos
            todos={this.state.todos}
            markComplete={this.markComplete}
            deleteTodo={this.deleteTodo}
          />
        </div>
      </div>
    );
  }
}

export default App;
