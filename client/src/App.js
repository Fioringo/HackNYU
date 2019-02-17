import { BrowserRouter as Router, Route } from 'react-router-dom'; 
import React, { Component } from 'react';
// import HomePage from "./Components/HomePage/HomePage";
import "./Components/Styles/Home.css"
import homeState from './Components/HomeStates/HomeStates';

class App extends Component {
  render() {
    return (
    	<Router>
	    	<div>
        {/* change this route to be the redux state */}
		    	<Route exact path="/" component={homeState} /> 
	    	</div>
    	</Router>
    );
  }
}

export default App;