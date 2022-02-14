import React from 'react';
import ItemCard from './ItemCard';
import { setItem } from '../../../Redux/actions/items';
import { connect } from 'react-redux';

class ItemsList extends React.Component {

    // state = {
    //     items: this.props.items
    // }

    componentDidMount() {
       
        this.props.dispatchSetItems()
        
    }

    // handleSubmit = (e) => {
    //     e.preventDefault()

    //     const searchInput = e.target[0].value.toLowerCase()
    //     const filterTrends = this.props.items.filter(t => t.name.toLowerCase().startsWith(searchInput))

    //     this.setState({
    //         items: filterTrends
    //     })
    //     // debugger
    // }

    render() {
        console.log(this.props.items)
    return (
    // <div>
    //     <form onSubmit={this.handleSubmit}>
    //         <input type="text" placeholder="search by name..."/>
    //         <input type="submit" value="Search" />
        // </form>
        <div className="items-list">
          <h2>Select Your Favorite Trends:</h2>
          {this.props.items.map(i => <ItemCard key={i.id} {...i} /> )}
        </div>
    // </div>
    );
    }
}

const mapStateToProps = state => ({ items: state })

const mapDispatchToProps = dispatch => ({
    dispatchSetItems: () => dispatch( setItem() )
})
export default connect(mapStateToProps, mapDispatchToProps)(ItemsList);



// 1 line form for search bar input/button
// onChange/onSubmit
// function handle 
// create local state and change state on name value