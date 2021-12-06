import React from 'react';
import ItemCard from './ItemCard';
import { setItem } from '../../../Redux/actions/items';
import { connect } from 'react-redux';

class ItemsList extends React.Component {

    componentDidMount() {
        this.props.dispatchSetItems()
    }

    render() {
    return (
        <div>
          Items List 
          {this.props.items.map(i => <ItemCard key={i.id} {...i} /> )}
        </div>
    );
    }
}

const mapStateToProps = state => ({ items: state })

const mapDispatchToProps = dispatch => ({
    dispatchSetItems: () => dispatch( setItem() )
})
export default connect(mapStateToProps, mapDispatchToProps)(ItemsList)
