import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MemeList from './MemeList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MemeList />
      </div>
    );
  }
}

export default App;
