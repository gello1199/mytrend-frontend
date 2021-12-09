import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ItemsList from './Items/Item/ItemsList';
import WelcomePage from './WelcomePage';
import ItemsFavorites from './itemsFavorites';
import ItemsForm from './Items/Forms/ItemsForm';

const Navbar = () => {
    return (
        <div className="navbar">
            <Switch>
            <Route exact path='/' component={WelcomePage} />
            <Route exact path='/trends' component={ItemsList} />
            <Route exact path='/new' component={(routerProps) => <ItemsForm routerHistory={routerProps.history} /> } />
            <Route exact path='/favorites' component={(routerProps) => <ItemsFavorites routerLocation={routerProps.location} /> } />
            </Switch>
        </div>
    );
}

export default Navbar;
