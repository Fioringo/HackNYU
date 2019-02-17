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
        {type: CLICKSETTINGS, isSignUp: false, isSettings: true, isAbout: false,  isViewBar: false},
        {type: CLICKSIGNUP, isSignUp: true, isSettings: false, isAbout: false,  isViewBar: false},
        {type: CLICKABOUT, isSignUp: false, isSettings: false, isAbout: true,  isViewBar: false},        
        {type: CLICKCLOSE, isSignUp: false, isSettings: false, isAbout: false,  isViewBar: true}
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

class Signup extends React.Component{

    handleSubmit(e){
        console.log(e)
    }

    render(){
        
        if(this.props.isSignUp){
            return(
                <div id="signup-wrapper">
                    <button class = "back" onClick = {this.props.onClose}></button>
                    <div class = "title">Sign Up</div>
                    <div class = "text">
                        Please sign up to our newsletter!
                    </div>
                    <form onSubmit={this.handleSubmit}>
                        <input class = "inputText" type = "text" defaultValue="foo@bar.com"></input>
                        <input type = "submit" value = "Sign up"></input>
                        <div id="footer">© VYEW Team</div>
                    </form>
                </div>
            );
        }

        else{
            return(true);
        }
    }

}


const SignupState = connect(mapStateToProps, mapDispatchToProps)(Signup);
export default SignupState;