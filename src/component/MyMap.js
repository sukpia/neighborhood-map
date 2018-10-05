import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={8}
    zoom = {props.zoom}
    defaultCenter={{ lat: 37.7749, lng: -122.4194 }}
    center = {props.center}
  >
    {props.markers && 
    	props.markers
    		.filter(marker => marker.isVisible)
    		.map((marker,index) =>(
    			<Marker key={index} position={{ lat: marker.lat, lng: marker.lng }} />
    		))}
  </GoogleMap>
))

const mapHeight = window.innerHeight

class MyMap extends Component {
	render() {
		return(
			<MyMapComponent
				{...this.props}
			  // isMarkerShown
			  googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyDLDeN27QtQJVyCa5W3D5WMRRGTWoKAjPU"
			  loadingElement={<div style={{ height: `100%` }} />}
			  containerElement={<div style={{ height: `${mapHeight}px` }} />}
			  mapElement={<div style={{ height: `100%` }} />}
			/>
		)
	}
}

export default MyMap;