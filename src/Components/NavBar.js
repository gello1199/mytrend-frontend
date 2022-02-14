import React from 'react';
import { Switch, Route } from 'react-router-dom';
import itemsList from './Items/Item/ItemsList';
import WelcomePage from './WelcomePage';
import ItemsFavorites from './itemsFavorites';
import ItemsForm from './Items/Forms/ItemsForm';

const NavBar = () => {
    return (
        <div className="navbar">
            <Switch>
            <Route exact path='/' component={WelcomePage} />
            <Route path='/trends' component={itemsList} />
            <Route path='/new' component={(routerProps) => <ItemsForm routerHistory={routerProps.history} /> } />
            <Route path='/favorites' component={(routerProps) => <ItemsFavorites routerLocation={routerProps.location} /> } />
            </Switch>
        </div>
    );
}

export default NavBar;
