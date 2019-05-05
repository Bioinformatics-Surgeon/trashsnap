import React, { Component } from 'react';
import { GoogleApiWrapper, Map, Marker, InfoWindow } from 'react-google-maps';
import './TrashMap.css';

class TrashMap extends Component {
    state = {
        center: {
            lat: 39.952,
            lng: -75.165,
            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: {}
        },
        zoom: 8,
        showInfoWindow: false
    };

    render() {
        return (
            <div 
                style={{ height: "400px", width: "960px", position: "relative" }}
                id="mainMap"
            >
                <Map 
                    google={this.props.google}
                    defaultCenter={this.props.center}
                    center={{
                        lat: parseFloat(this.props.latitude),
                        lng: parseFloat(this.props.longitude)
                    }}
                    zoom={this.props.zoom}
                    onClick={this.onMapClick}
                    >
                    <Marker
                        position={{lat: this.props.latitude, lng: this.props.longitude}}
                    >
                    </Marker>
                ))}
            </Map>
        </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyDSI6lWAGiM5M4WzNSJB55KLUYzjwqX05k"
  })(TrashMap);