import React, { Component } from "react";
import { GoogleApiWrapper, Map, Marker } from "google-maps-react";

class MainMap extends Component {
  state = {
    center: {
      lat: 39.958003,
      lng: -75.196651,
      showingInfoWindow: false, //Hides or the shows the infoWindow
      activeMarker: {}, //Shows the active marker upon click
      selectedPlace: {}
    },
    zoom: 12,
    points: [
      { lat: 39.91, lng: -75.2 },
      { lat: 39.86, lng: -75.1 },
      { lat: 39.77, lng: -75.0 },
      { lat: 39.68, lng: -74.91 }
    ],
    showInfoWindow: false
  };

  // onMarkerClick = (props, marker, e) =>
  //   this.setState({
  //     selectedPlace: props,
  //     activeMarker: marker,
  //     showingInfoWindow: true
  //   });

  // onMapClick = props => {
  //   if (this.state.showingInfoWindow) {
  //     this.setState({
  //       showingInfoWindow: false,
  //       activeMarker: null
  //     });
  //   }
  // };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div
        style={{ height: "400px", width: "960px", position: "relative" }}
        id="mapEmbed"
      >
        <Map
          google={this.props.google}
          defaultCenter={this.props.center}
          center={{
            lat: parseFloat(this.props.latitude),
            lng: parseFloat(this.props.longitude)
          }}
          zoom={this.props.zoom}
          bounds={this.points}
          onClick={this.onMapClick}
        >
          {this.props.DATABASE.map(yuck => (
            <Marker
              position={{ lat: yuck.lat, lng: yuck.lng }}
              onClick={this.onMarkerClick}
              title={yuck.name}
              name={yuck.name}
              url={yuck.url}
              address={yuck.address}
            >
              )}
            </Marker>
          ))}
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDSI6lWAGiM5M4WzNSJB55KLUYzjwqX05k"
})(Map);
