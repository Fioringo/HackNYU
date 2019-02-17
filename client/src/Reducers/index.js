import { CLICKSETTINGS, CLICKSIGNUP, CLICKABOUT, CLICKCLOSE} from "../Actions";

const initialState = {

    isSignUp: false,
    isSettings: false,
    isAbout: false,
    isViewBar: true
};

export default (state = initialState, action) =>{

    switch(action.type){
   
        case CLICKSETTINGS:
            return Object.assign({}, state, state.stateStack = action.stateStack, state.isSignUp = action.isSignUp, state.isSettings = action.isSettings, state.isAbout = action.isAbout, state.width = action.width, state.isViewBar = action.isViewBar);

        case CLICKSIGNUP:
            return Object.assign({}, state, state.stateStack = action.stateStack, state.isSignUp = action.isSignUp, state.isSettings = action.isSettings, state.isAbout = action.isAbout, state.width = action.width, state.isViewBar = action.isViewBar);

        case CLICKABOUT:
            return Object.assign({}, state, state.stateStack = action.stateStack, state.isSignUp = action.isSignUp, state.isSettings = action.isSettings, state.isAbout = action.isAbout, state.width = action.width, state.isViewBar = action.isViewBar);

        case CLICKCLOSE:
            return Object.assign({}, state, state.stateStack = action.stateStack, state.isSignUp = action.isSignUp, state.isSettings = action.isSettings, state.isAbout = action.isAbout, state.width = action.width, state.isViewBar = action.isViewBar);
    
        default:
            return state;
    } 
};