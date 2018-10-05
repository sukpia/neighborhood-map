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

  closeAllMarkers = () => {
    const markers = this.state.markers.map(marker => {
      marker.isOpen = false;
      return marker;
    })
    this.setState({marker: Object.assign(this.state.markers, markers)});
  }

  handleMarkerClick = (marker) => {
    this.closeAllMarkers();
    marker.isOpen = true;
    this.setState({markers: Object.assign(this.state.markers,marker)})
    const venue = this.state.venues.find(venue => venue.id === marker.id);
    // console.log(venue, "SINGLE VENUE")
    SquareAPI.getVenueDetails(marker.id).then(res => {
      const newVenue = Object.assign(venue, res.response.venue);
      this.setState({venues: Object.assign(this.state.venues,newVenue)})
      console.log(newVenue);
    });
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
          isVisible: true,
          id: venue.id
        };
      });
      
      this.setState({venues, center, markers});
      console.log(results);
    });
  }

  render() {

    return (
      <div className="app">
        <MyMap {...this.state}
        handleMarkerClick={this.handleMarkerClick} />
      </div>
    )
  }
}

export default App;
