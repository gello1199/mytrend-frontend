import React from 'react';
import { connect } from 'react-redux';
// import ItemCard from './Items/Item/ItemCard';

const Itemsfavorites = () => {
    return (
        <div>
            {this.state.filter(i => i.favorite )}
            
        </div>
    );
}

const mapStateToProps = state => ({items: state})

export default connect(mapStateToProps, null)(Itemsfavorites);

