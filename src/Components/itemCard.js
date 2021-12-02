import React from 'react';

const Itemcard = (props) => {
    return (
        <div>
           <li key={props.id}>{props.name} - {props.description} - ${props.price} - Likes: {props.likes} - {props.category} <img src={props.image} alt="trends" /> </li>
        </div>
    );
}

export default Itemcard;
