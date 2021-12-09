import React from 'react';
import { editFavorites, deleteItem } from '../../../Redux/actions/items';
import { connect } from 'react-redux';

const ItemCard = (props) => {
    // console.log(props)

    function handleDelete() {
        // console.log(typeof props.id)
        props.dispatchDeleteItem(props.id)
    }

    function handleFavorite() {
        console.log(props)
        props.dispatchAddToFavorites(props)
    }

    return (
       
        <div key={props.id} className="item-card">
           Name: {props.name} <br />
           Description: {props.description} <br />
           Price: ${props.price} <br />
            
           <button 
           className="button" 
           onClick={handleFavorite}
           >
           {props.favorite ? "Remove From Favorites" : "Add To Favorites"} 
           </button>  
            <button className="button" onClick={handleDelete}>Delete Item</button> <br />
           <img src={props.image} alt="trends" className="image" />
        </div>
        
    );

}


const mapDispatchToProps = dispatch => ({
    dispatchDeleteItem: (id) => dispatch( deleteItem(id) ),
    dispatchAddToFavorites: (id) => dispatch( editFavorites(id) )
})

export default connect(null, mapDispatchToProps)(ItemCard);
