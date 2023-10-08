/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

interface MapContainerProps {
  google: unknown;
}

class MapContainer extends Component<MapContainerProps> {
  render() {
    // const mapStyles = {
    //   width: '100%',
    //   height: '400px',
    // };

    return (
      <></>
      // <Map
      //   google={this.props.google}
      //   style={mapStyles}
      //   initialCenter={{ lat: -12.605691859755938, lng: -78.21212524622916 }} // Coordenadas iniciales (San Francisco)
      // >
      //   <Marker
      //     position={{ lat: -10.605691859755938, lng: -76.21212524622916 }} // Coordenadas del marcador
      //     title="Unidad minera El Porvenir"
      //   />
      // </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCBPGE1qMls4tvWT09TRWjwYjoQeELS_LU', // Reemplaza con tu API Key de Google Maps
})(MapContainer);
