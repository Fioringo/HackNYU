import React from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import styled from 'styled-components';

const Wrapper = styled.div`

    width: ${props =>  props.width};
    height: ${props => props.height};
    background: #AAD3DF;
`;

export default class Map extends React.Component{

    constructor(props){

        super(props);

        this.state = {
            mapData: this.props.mapData
        }
    }

    componentDidMount(){

        this.map = L.map('map', {
            center: [42,10],
            zoom: 3,
            zoomControl: true,
        })

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 15,
            minZoom: 2,
	        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(this.map);
    }

    render(){
        return(
            <div>
                {console.log("This is inside the map component: ", this.state.mapData)}
                <Wrapper width="100vw" height="100vh" id="map"/>
            </div>
        );
    }
}