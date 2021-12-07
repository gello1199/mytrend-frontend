import React from 'react';
import { addToFavorites, deleteItem } from '../../../Redux/actions/items';
import { connect } from 'react-redux';

const ItemCard = (props) => {
    // console.log(props)

    function handleDelete() {
        console.log(typeof props.id)
        props.dispatchDeleteItem(props.id)
    }

    function handleFavorite() {
        console.log(props)
        props.dispatchAddToFavorites(props.id)
        // this.props.routerHistory.push('/favorites')
    }

    return (
       
        <div key={props.id} className="item-card">
           Name: {props.name} <br />
           Description: {props.description} <br />
           Price: ${props.price} <br />
           {/* <p>Likes: {props.likes}</p> */}
           <button onClick={handleFavorite}>Add To Favorites</button> <br />
            <button onClick={handleDelete}>Delete Item</button> <br />
           {/* <p>Category: {props.category}</p> */}
           <img src={props.image} alt="trends" className="image" />
        </div>
        
    );

}


const mapDispatchToProps = dispatch => ({
    dispatchDeleteItem: (id) => dispatch( deleteItem(id) ),
    dispatchAddToFavorites: (id) => dispatch( addToFavorites(id) )
})

export default connect(null, mapDispatchToProps)(ItemCard);
