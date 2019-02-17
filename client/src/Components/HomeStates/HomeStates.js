import { connect } from 'react-redux';
import HomePage from '../HomePage/HomePage';

import {CLICKSETTINGS, CLICKSIGNUP, CLICKABOUT, CLICKCLOSE} from "../../Actions";

const mapStateToProps = (state, ownProps) => {

    return {

        stateStack: state.stateStack,
        isSignUp: state.isSignUp,
        isSettings: state.isSettings,
        isAbout: state.isAbout,
        width: state.width,
        isViewBar: state.isViewBar,
        mapData: state.mapData
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {

    const possibleStates = [
        {type: CLICKSETTINGS, isSignUp: false, isSettings: true, isAbout: false, width: "80vw", isViewBar: false},
        {type: CLICKSIGNUP, isSignUp: true, isSettings: false, isAbout: false, width: "80vw", isViewBar: false},
        {type: CLICKABOUT, isSignUp: false, isSettings: false, isAbout: true, width: "80vw", isViewBar: false},        
        {type: CLICKCLOSE, isSignUp: false, isSettings: false, isAbout: false, width: "95vw", isViewBar: true},
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

console.log("Redux store connected.");
const HomeState = connect(mapStateToProps, mapDispatchToProps)(HomePage);
export default HomeState;