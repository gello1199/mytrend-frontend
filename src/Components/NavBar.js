import React from 'react';
import { Switch, Route } from 'react-router-dom';
import itemsList from './Items/Item/itemsList';
import Welcomepage from './welcomePage';
import Itemsform from './Items/Forms/itemsForm';
import Itemsfavorites from './itemsFavorites';

const Navbar = () => {
    return (
        <div className="navbar">
            <Switch>
            <Route path='/home' component={Welcomepage} />
            <Route path='/trends' component={itemsList} />
            <Route path='/new' component={Itemsform} />
            <Route path='/favorites' component={Itemsfavorites} />
            </Switch>
        </div>
    );
}

export default Navbar;
