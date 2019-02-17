import React from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import styled from 'styled-components';
import { connect } from 'react-redux';
import {CLICKSETTINGS, CLICKSIGNUP, CLICKABOUT, CLICKCLOSE} from "../../Actions";

import "../HomePage/HomePage.css";

const mapStateToProps = (state, ownProps) => {

    return {
        isSignUp: state.isSignUp,
        isSettings: state.isSettings,
        isAbout: state.isAbout,
        isViewBar: state.isViewBar
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {

    const possibleStates = [
        {type: CLICKSETTINGS, isSignUp: false, isSettings: true, isAbout: false,  isViewBar: false},
        {type: CLICKSIGNUP, isSignUp: true, isSettings: false, isAbout: false,  isViewBar: false},
        {type: CLICKABOUT, isSignUp: false, isSettings: false, isAbout: true,  isViewBar: false},        
        {type: CLICKCLOSE, isSignUp: false, isSettings: false, isAbout: false,  isViewBar: true},
    ];

    return {
        onSettings: () =>{
            dispatch(possibleStates[0]);
        },

        onSignUp: () => {
            dispatch(possibleStates[1]);
        },

        onAbout: () => {
            dispatch(possibleStates[2]);
        },

        onClose: () => {
            dispatch(possibleStates[3]);
        },
    }
};

//     width: ${props =>  props.width};
//     height: ${props => props.height};


const Wrapper = styled.div`
    width: 95vw;
    height: 100vh;
    background: #AAD3DF;
`;

class Map extends React.Component{

    constructor(props){

        super(props);
        this.state = {
            mapData: this.props.mapData
        }
    }

    componentDidMount(){

        //initialize the map container
        this.map = L.map('map', {
            center: [40.730610, -73.935242],    // start at new york city
            zoom: 11,
            zoomControl: true,
        })
        
        this.renderMap();

        // console.log(this.state.mapData);         
        this.state.mapData.forEach((location) => {
            
            L.circle([location.latitude,location.longitude],{
                color: 'green',
                fillColor: 'green',
                // opacity: 0.75,
                radius: 300,
                // stroke: false
            }).addTo(this.map);
        });
    }

    renderMap = () => {

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 18,
            minZoom: 2,
	        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(this.map);
    }

    render(){
        // console.log("This is the width: ", this.state.width);
        return(
            <Wrapper id="map"/>
        );
    }
}

const MapState = connect(mapStateToProps, mapDispatchToProps)(Map);
export default MapState;