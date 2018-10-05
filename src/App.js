import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import MyMap from './component/MyMap';
import SquareAPI from './API/';

class App extends Component {

  componentDidMount() {
    SquareAPI.search({
      near: "San Francisco, CA",
      query: "tacos",
      limit: 10
    }).then(results => console.log(results));
  }

  render() {
    return (
      <div className="app">
        <MyMap />
      </div>
    )
  }
}

export default App;
