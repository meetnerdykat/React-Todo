import React from 'react';
import './App.css';
import Todo from './components/TodoComponents/Todo';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div className="App">
        <Todo />
      </div>
    );
  }
}

export default App;
