import React from 'react';

import MapState from "../Map/Map";
import NavBarState from "../NavBar/NavBar";
import SettingsState from '../Settings/Settings';
import SignupState from '../SignUp/Signup';

import "./HomePage.css";

import { connect } from 'react-redux';
import {CLICKSETTINGS, CLICKSIGNUP, CLICKABOUT, CLICKCLOSE} from "../../Actions";
import axios from 'axios';

const mapStateToProps = (state, ownProps) => {

    return {
        isSignUp: state.isSignUp,
        isSettings: state.isSettings,
        isAbout: state.isAbout,
        isViewBar: state.isViewBar,
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {

    const possibleStates = [
        {type: CLICKSETTINGS, isSignUp: false, isSettings: true, isAbout: false, isViewBar: false},
        {type: CLICKSIGNUP, isSignUp: true, isSettings: false, isAbout: false, isViewBar: false},
        {type: CLICKABOUT, isSignUp: false, isSettings: false, isAbout: true, isViewBar: false},        
        {type: CLICKCLOSE, isSignUp: false, isSettings: false, isAbout: false, isViewBar: true}
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

class HomePage extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            isFetched: false,
            mapData: []
        }
    }

    componentDidMount(){
        // fetching the trees data from NYC open data (AJAX)
        axios.get("https://data.cityofnewyork.us/resource/5rq2-4hqu.json", {
            credentials: "include",
            method: "get",
            header: {
                'Accept': 'application/json',
                'Content-Type': 'application/json' 
            }
        })

        .then((response) => {

            console.log("We got a response.");
            this.setState({
                isFetched: true,
                mapData: response.data
            })
        })

        .catch((err) => {
            console.log(err);  
        })
    }

    render(){

        if(this.state.isFetched){
            return(
                <div id="main-container">
                    <MapState mapData= {this.state.mapData}/>
                    <NavBarState/> 
                    <SettingsState/>
                    <SignupState/>
                </div>
            );
        }else{
            return(
                <h1>Loading...</h1>
            );
        }
    }

}

const HomeState = connect(mapStateToProps, mapDispatchToProps)(HomePage);
export default HomeState;