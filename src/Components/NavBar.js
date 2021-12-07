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
            <Route path='/home' component={WelcomePage} />
            <Route path='/trends' component={ItemsList} />
            <Route path='/new' component={(routerProps) => <ItemsForm routerHistory={routerProps.history} /> } />
            <Route path='/favorites' component={ItemsFavorites} />
            </Switch>
        </div>
    );
}

export default Navbar;
