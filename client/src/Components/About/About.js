import React from 'react';
import { connect } from 'react-redux';
import {CLICKSETTINGS, CLICKSIGNUP, CLICKABOUT, CLICKCLOSE} from "../../Actions";
import "../HomePage/HomePage.css";

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
        }
    }
};


class About extends React.Component{

    render(){
        if(this.props.isAbout){
            return(
                <div id="about-wrapper">
                    <button class = "button-layout" onClick = {this.props.onClose}>Close</button>
                    <div id="footer">(c) VYEW Team</div>
                </div>
            );
        }else{
            return true;
        } 
    }
}

const AboutState = connect(mapStateToProps, mapDispatchToProps)(About);
export default AboutState;