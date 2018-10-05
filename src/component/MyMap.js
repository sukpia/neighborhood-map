import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps"

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={8}
    zoom = {props.zoom}
    defaultCenter={{ lat: 37.7749, lng: -122.4194 }}
    center = {props.center}
  >
    {props.markers && 
    	props.markers
    		.filter(marker => marker.isVisible).map((marker,index) => {
    			const venueInfo = props.venues.find(venue => venue.id === marker.id);
    			return (
    				<Marker key={index} position={{ lat: marker.lat, lng: marker.lng }} onClick={() => props.handleMarkerClick(marker)}>
	    				{marker.isOpen && venueInfo.bestPhoto && (
	    					<InfoWindow>
	    						<React.Fragment>
	    							<img src={`${venueInfo.bestPhoto.prefix}200x200${venueInfo.bestPhoto.suffix}`} alt={"Venue Image"} />
	    							<p>{venueInfo.name}</p>
	    						</React.Fragment>
	    					</InfoWindow>
	  					)}
	    			</Marker>
    			);
			})}
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