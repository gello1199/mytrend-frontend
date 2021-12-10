import React from 'react';
import { connect } from 'react-redux';
import ItemCard from './Items/Item/ItemCard';

const Itemsfavorites = (props) => {
    return (
        <div>
        <h2>My Favorites:</h2>
            {props.items.filter(i => i.favorite).map(f => <ItemCard key={f.id} {...f} location={props.routerLocation} />)}
        </div>
    );
}

const mapStateToProps = state => ({items: state})

export default connect(mapStateToProps, null)(Itemsfavorites);



