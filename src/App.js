import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Map from './component/Map'

class App extends Component {
  render() {
    return (
      <div className="app">
        <Map />
      </div>
    );
  }
}

export default App;
