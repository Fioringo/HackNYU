import React from 'react';

class Signup extends React.Component{

    render(){
        
        return(
            <div id="Signup">
                <div id="buttonAbout" onClick={handleAboutClick}>About</div>
                <div id="buttonSignup" onClick={handleSignupClick}>Signup</div>
                <div id="content">Settings!</div>
                <div id="footer">(c) Vyew Team</div>
            </div>
        );
    }

}

export default Signup;