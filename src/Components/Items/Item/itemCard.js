import React from 'react';
import { deleteItem } from '../../../Redux/actions/items';
import { connect } from 'react-redux';

const ItemCard = (props) => {
    // console.log(props)

    function handleDelete() {
        console.log(typeof props.id)
        props.dispatchDeleteItem(props.id)
    }

    return (
        <div key={props.id} className="item-card">
           <p>Name: {props.name}</p>
           <p>Description: {props.description}</p>
           <p>Price: ${props.price}</p>
           <p>Likes: {props.likes}</p>
           <p><button>Add To Favorites</button></p>
            <span>
            <button>Edit Item</button>
            <button onClick={handleDelete}>Delete Item</button>
            </span>
           <p>Category: {props.category}</p>
           <img src={props.image} alt="trends" width="200" height="250" />
        </div>
    );

}

const mapDispatchToProps = dispatch => ({
    dispatchDeleteItem: (id) => dispatch( deleteItem(id) )
})

export default connect(null, mapDispatchToProps)(ItemCard);
