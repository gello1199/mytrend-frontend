import React, { Component } from 'react';

class Itemsform extends Component {

    state = {
        name: "",
        description: "",
        price: "",
        image: "",
        category: ""
    }

    handleChange = (event) => {
        this.setState({
         [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <form>
                <label htmlFor="name-input">Name: </label>
                <input 
                id="name-input" 
                type="text" 
                value={this.state.name}
                onChange={this.handleChange}
                /> <br />

                <label htmlFor="descrip-input">Description: </label> 
                <textarea id="descrip-input" value={this.state.description} /> <br />

                <label htmlFor="price-input">Price: </label> 
                <input id="price-input" type="text" value={this.state.price} /> <br />

                <label htmlFor="image-input">Image URL: </label> 
                <input id="image-input" type="text" value={this.state.image} /> <br />

                <label htmlFor="category-input">Category: </label> 
                <input id="category-input" type="text" value={this.state.category} /> <br />
                <input type="submit" />
            </form>
        );
    }
}

export default Itemsform;

