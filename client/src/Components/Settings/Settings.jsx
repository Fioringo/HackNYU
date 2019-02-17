import React from 'react'
import "../Styles/Settings.css"

class Settings extends React.Component{

    handleAboutClick = () => {
        console.log("About clicked!")
    }

    handleSignupClick = () => {
        console.log("Signup Click!")
    }

    render(){

        return(
            <div id="Settings">
                <div id="buttonAbout" onClick={this.handleAboutClick}>About</div>
                <div id="buttonSignup" onClick={this.handleSignupClick}>Signup</div>
                <div id="settingsContent" >content style view hidden or not</div>
                <div id="footer">(c) VYEW Team</div>
            </div>
        );
    }

}

export default Settings;