import React from 'react';
import Map from "../Map/Map";
import Settings from "../Settings/Settings"

class HomePage extends React.Component{

    render(){

        return(
            <div>
                <Map/>
                <Settings/>
            </div>
        );
    }

}

export default HomePage;