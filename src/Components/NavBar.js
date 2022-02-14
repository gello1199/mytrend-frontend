import React from 'react';
import { Switch, Route } from 'react-router-dom';
import WelcomePage from './WelcomePage';
import ItemsList from './ItemsList';
import ItemsFavorites from './itemsFavorites';
import ItemsForm from './Items/Forms/ItemsForm';

const NavBar = () => {
    return (
        <div className="navbar">
            <Switch>
            <Route exact path='/' component={WelcomePage} />
            <Route path='/trends' component={ItemsList} />
            <Route path='/new' component={(routerProps) => <ItemsForm routerHistory={routerProps.history} /> } />
            <Route path='/favorites' component={(routerProps) => <ItemsFavorites routerLocation={routerProps.location} /> } />
            </Switch>
        </div>
    );
}

export default NavBar;
