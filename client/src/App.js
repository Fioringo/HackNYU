import { BrowserRouter as Router, Route, Link } from 'react-router-dom'; 
import React, { Component } from 'react';
import HomePage from "./Components/HomePage/HomePage";

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