import React, { Component } from 'react';
import { GoogleApiWrapper, Marker } from 'google-maps-react';
import Map from 'google-maps-react';

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
    pointArr: [
      { lat: 39.956, lng: -75.198 },
      { lat: 39.951, lng: -75.18 }
    ],
    showInfoWindow: true
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

    onClose = props => {
      if (this.state.showingInfoWindow) {
        this.setState ({
          showingInfoWindow: false,
          activeMarker: null
        });
      }
    };

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
        style={{ height: '400px', width: '350px', position: 'relative' }}
        id='mapEmbed'
      >
        <Map
          google={this.props.google}
          initialCenter={{ lat: this.state.center.lat, lng: this.state.center.lng }}
          zoom={this.props.zoom}
          bounds={this.points}
          onClick={this.onMapClick}
        >
          {this.state.pointArr.map(yuck => (
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
  apiKey: 'AIzaSyDSI6lWAGiM5M4WzNSJB55KLUYzjwqX05k'
})(MainMap);
