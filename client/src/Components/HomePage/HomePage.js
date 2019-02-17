import React from 'react';
import Map from "../Map/Map";
import Settings from "../Settings/Settings"
import "../Styles/Home.css"
import axios from 'axios';

const HomePage = ({mapData, onSettings, onSignUp, onAbout, onClose, stateStack}) => {
    
    async function fetchMapData(){

        // fetching the trees data from NYC open data
        await axios.get("https://data.cityofnewyork.us/resource/ifu9-zqkd.json", {
            credentials: "include",
            method: "get",
            header: {
                'Accept': 'application/json',
                'Content-Type': 'application/json' 
            }
        })
    //     return(
    //         <div id="content">
    //             <div id="mapWrapper"><Map/></div>
    //             <div id="settingsWrapper"><Settings/></div>
    //         </div>
    //     );
    // }
        .then((response) => {
            console.log("We got response.");
            mapData = response.data;
            // stateStack.push(mapData);
        })

        .catch((err) => {
            console.log(err);  
        })

    } 

    fetchMapData();

    return(
        <div>
            <Map mapData = {mapData}/>
        </div>
    );
}

export default HomePage;