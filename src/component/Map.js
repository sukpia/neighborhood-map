import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
  	options={{ fullscreenControl: true }}
    defaultZoom={8}
    defaultCenter={{ lat: 37.7749, lng: -122.4194 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: 37.7749, lng: -122.4194 }} />}
  </GoogleMap>
))

const mapHeight = window.innerHeight

class Map extends Component {
	render() {
		return(
			<MyMapComponent
			  isMarkerShown
			  googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyDLDeN27QtQJVyCa5W3D5WMRRGTWoKAjPU"
			  loadingElement={<div style={{ height: `100%` }} />}
			  containerElement={<div style={{ height: `${mapHeight}px` }} />}
			  mapElement={<div style={{ height: `100%` }} />}
			/>
		)
	}
}

export default Map;