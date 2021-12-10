import React from 'react';
import LogoTransparent from '../images/logo_transparent.png'

const Welcomepage = () => {
    return (
        <div>
            <h1>Welcome to MyTrends</h1>
            <p>Here is a one stop shop where you can curate your favorite looks from our trends page!</p>
            <img src={LogoTransparent} alt="logo" className="logo" height="200" width="200" />
            
        </div>);
}

export default Welcomepage;

