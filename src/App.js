import React, { Component } from 'react';
import Navbar from './Components/Layouts/Navbar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <h1>Hello</h1>
      </div>
    );
  }
}

export default App;