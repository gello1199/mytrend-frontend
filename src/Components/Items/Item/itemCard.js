import React from 'react';

const Itemcard = (props) => {

    return (
        <div key={props.id} className="item-card">
           <p>Name: {props.name}</p>
           <p>Description: {props.description}</p>
           <p>Price: ${props.price}</p>
           <p>Likes: {props.likes}</p>
           <p>Category: {props.category}</p>
           <img src={props.image} alt="trends" width="200" height="250" />
        </div>
    );

}

export default Itemcard;
