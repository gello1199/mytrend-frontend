import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addItem } from '../../../Redux/actions/items';

class ItemsForm extends Component {
    
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

    handleSubmit = event => {
        event.preventDefault()

        this.props.dispatchAddItem(this.state)

        this.setState({
            item: {
                name: "",
                description: "",
                price: "",
                image: "",
                category: ""
            }
        })
    }

    render() {
        // console.log(this.state)
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="name-input">Name: </label>
                <input 
                name="name"
                id="name-input" 
                type="text" 
                value={this.state.name}
                onChange={this.handleChange}
                /> <br />

                <label htmlFor="descrip-input">Description: </label> 
                <textarea 
                name="description"
                id="descrip-input" 
                value={this.state.description}
                onChange={this.handleChange}
                /> <br />

                <label htmlFor="price-input">Price: </label> 
                <input 
                name="price"
                id="price-input" 
                type="text" 
                value={this.state.price}
                onChange={this.handleChange}
                /> <br />

                <label htmlFor="image-input">Image URL: </label> 
                <input 
                name="image"
                id="image-input" 
                type="text" 
                value={this.state.image}
                onChange={this.handleChange} 
                /> <br />

                <label htmlFor="category-input">Category: </label> 
                <input 
                name="category"
                id="category-input" 
                type="text" 
                value={this.state.category} 
                onChange={this.handleChange}
                /> <br />
                
                <input type="submit" />
            </form>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
    dispatchAddItem: (item) => dispatch(addItem(item))
    }
}

export default connect(null, mapDispatchToProps) (ItemsForm);

