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
        this.props.routerHistory.push('/trends')

        this.setState({
                name: "",
                description: "",
                price: "",
                image: "",
                category: ""
        })
    }

    render() {
        // console.log(this.state)
        return (
            <div className="item-form">
            <form onSubmit={this.handleSubmit}>
                <div>
                {/* <label htmlFor="name-input">Name: </label> */}
                <input 
                name="name"
                id="name-input" 
                type="text" 
                value={this.state.name}
                onChange={this.handleChange}
                placeholder="Name"
                /> <br />
                </div>

                <div>
                {/* <label htmlFor="descrip-input">Description: </label>  */}
                <textarea 
                name="description"
                id="descrip-input" 
                value={this.state.description}
                onChange={this.handleChange}
                placeholder="Description"
                /> <br />
                </div>

                {/* <label htmlFor="price-input">Price: </label>  */}
                <input 
                name="price"
                id="price-input" 
                type="text" 
                value={this.state.price}
                onChange={this.handleChange}
                placeholder="Price"
                /> <br />

                {/* <label htmlFor="image-input">Image URL: </label>  */}
                <input 
                name="image"
                id="image-input" 
                type="text" 
                value={this.state.image}
                onChange={this.handleChange} 
                placeholder="Image URL"
                /> <br />

                {/* <label htmlFor="category-input">Category: </label>  */}
                <label htmlFor="category">Select a Category:</label>
                <select 
                name="category" 
                id="category-input"
                onChange={this.handleChange}
                value={this.state.category} >
                <option value="men">Men</option>
                <option value="women">Women</option>
                </select>
                <br />
                
                <input className="button" type="submit" />
            </form>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
    dispatchAddItem: (item) => dispatch(addItem(item))
    }
}

export default connect(null, mapDispatchToProps) (ItemsForm);

