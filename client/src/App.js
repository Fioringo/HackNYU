import { BrowserRouter as Router, Route, Link } from 'react-router-dom'; 
import React, { Component } from 'react';
import HomePage from "./Components/HomePage/HomePage";
import "./Components/Styles/Home.css"

class App extends Component {
  render() {
    return (
    	<Router>
	    	<div>
		    	<Route exact path="/" component={HomePage} />
	    	</div>
    	</Router>
    );
  }
}

export default App;