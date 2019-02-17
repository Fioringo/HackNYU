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


class Settings extends React.Component{

    render(){
        if(this.props.isSettings){
            return(
                <div id="settings-wrapper">
                    <button className = "back" onClick = {this.props.onClose}></button>
                    <button className = "button-layout" onClick = {this.props.onAbout}>About</button>
                    <button className = "button-layout" onClick = {this.props.onSignUp}>Sign up</button>
                    <div id="footer">© Vyew Team</div>
                </div>
            );
        }else{
            return true;
        } 
    }
}

const SettingsState = connect(mapStateToProps, mapDispatchToProps)(Settings);
export default SettingsState;