import React from 'react';
import { connect } from 'react-redux';
import ItemCard from './Items/Item/ItemCard';

const Itemsfavorites = (props) => {
    return (
        <div>
            {props.items.filter(i => i.favorite).map(f => <ItemCard {...f} />)}

            
        </div>
    );
}

const mapStateToProps = state => ({items: state})

export default connect(mapStateToProps, null)(Itemsfavorites);

