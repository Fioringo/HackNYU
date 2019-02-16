import React from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import styled from 'styled-components';

const Wrapper = styled.div`

    width: ${props =>  props.width};
    height: ${props => props.height};
`;

export default class Map extends React.Component{

    componentDidMount(){

        this.map = L.map('map', {
            center: [58,16],
            zoom: 3,
            zoomControl: false
        })

        L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
	        attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
        }).addTo(this.map);

    }

    render(){
        return( <Wrapper width="100vw" height="100vh" id="map"/>)
    }
}