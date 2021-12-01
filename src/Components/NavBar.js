import React from 'react';
import { Switch, Route } from 'react-router-dom';
import itemsList from './itemsList';
import Welcomepage from './welcomePage';
import Itemsform from './itemsForm';
import Itemsfavorites from './itemsFavorites';

const Navbar = () => {
    return (
        <div>
            <Switch>
            <Route path='/home' render={Welcomepage} />
            <Route path='/trends' render={itemsList} />
            <Route path='/new' render={Itemsform} />
            <Route path='/favorites' render={Itemsfavorites} />
            </Switch>
        </div>
    );
}

export default Navbar;
