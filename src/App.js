import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import MyMap from './component/MyMap';
import SquareAPI from './API/';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      venues: [],
      markers: [],
      center: {
        lat: 37.7749,
        lng: -122.4194
      },
      zoom: 13
    };
  }
  
  componentDidMount() {
    SquareAPI.search({
      near: "San Francisco, CA",
      query: "tacos",
      limit: 10
    }).then(results => {
      const { venues } = results.response;
      const { center } = results.response.geocode.feature.geometry;
      const markers = venues.map(venue => {
        return {
          lat: venue.location.lat,
          lng: venue.location.lng,
          isOpen: false,
          isVisible: true
        };
      });
      
      this.setState({venues, center, markers});
      console.log(results);
    });
  }

  render() {

    return (
      <div className="app">
        <MyMap {...this.state} />
      </div>
    )
  }
}

export default App;
