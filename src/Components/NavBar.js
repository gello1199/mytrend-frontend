import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <NavLink to='/' exact style={link}></NavLink>
            <NavLink to='/home' exact style={link}>Home</NavLink>
        </div>
    );
}

export default Navbar;
