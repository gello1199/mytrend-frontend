import React from 'react';
import LogoTransparent from '../images/logo_transparent.png'

const Welcomepage = () => {
    return (
        <div>
            <img src={LogoTransparent} alt="logo" className="logo" />
            <h1>Welcome to MyTrends</h1>
            <p>Here is a one stop shop where you can curate your favorite looks from our trends page!</p>
            
        </div>);
}

export default Welcomepage;

