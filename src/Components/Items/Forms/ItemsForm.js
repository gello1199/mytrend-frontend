import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addItem } from '../../../Redux/actions/items';

class ItemsForm extends Component {

    state = {
        name: "",
        description: "",
        price: "",
        image: "",
        category: "men",
    }

    handleChange = (event) => {
        this.setState({
         [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        // console.log(this.props)
        event.preventDefault()

        this.props.dispatchAddItem(this.state, this.props.routerHistory)

        this.setState({
                name: "",
                description: "",
                price: "",
                image: "",
                category: "men",
        })
    }

    render() {
        // console.log(this.state)
        return (
            <div className="item-form">
            <h3>Create A New Look</h3>
            <form onSubmit={this.handleSubmit} data-netlify="true">
                <div>
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
                <textarea 
                name="description"
                id="descrip-input" 
                value={this.state.description}
                onChange={this.handleChange}
                placeholder="Description"
                /> <br />
                </div>

                <input 
                name="price"
                id="price-input" 
                type="text" 
                value={this.state.price}
                onChange={this.handleChange}
                placeholder="Price"
                /> <br />

                <input 
                name="image"
                id="image-input" 
                type="text" 
                value={this.state.image}
                onChange={this.handleChange} 
                placeholder="Image URL"
                /> <br />

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
    dispatchAddItem: (item, redirect) => dispatch(addItem(item, redirect))
    }
}

export default connect(null, mapDispatchToProps) (ItemsForm);

