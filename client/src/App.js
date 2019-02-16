import { BrowserRouter as Router, Route, Link } from 'react-router-dom'; 
import React, { Component } from 'react';
import HomeApp from "./components/homeApp";

class App extends Component {
  render() {
    return (
    	<Router>
	    	<div>
		    	<Route exact path="/" component={HomeApp} />
          <Route exact path="/home" component={HomeApp} />
	    	</div>
    	</Router>
    );
  }
}

export default App;