import React from 'react';
import Map from "../Map/Map";
import Settings from "../Settings/Settings"
import "../Styles/Home.css"

class HomePage extends React.Component{

    render(){

        return(
            <div id="content">
                <div id="mapWrapper"><Map/></div>
                <div id="settingsWrapper"><Settings/></div>
            </div>
        );
    }

}

export default HomePage;