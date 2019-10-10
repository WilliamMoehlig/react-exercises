import React, { Component } from 'react';
import ToDoContainer from './components/ToDoContainer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ToDoContainer />
      </div>
    );
  }
}

export default App;
