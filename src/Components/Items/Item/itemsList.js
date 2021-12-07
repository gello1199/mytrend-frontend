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
        <div className="items-list">
          <h2>Items List:</h2>
          {this.props.items.map(i => <ItemCard key={i.id} {...i} /> )}
        </div>
    );
    }
}

const mapStateToProps = state => ({ items: state.items })

const mapDispatchToProps = dispatch => ({
    dispatchSetItems: () => dispatch( setItem() )
})
export default connect(mapStateToProps, mapDispatchToProps)(ItemsList)
