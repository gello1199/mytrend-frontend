import React from 'react';
import Itemcard from './itemCard';
import { setItem } from '../../../Redux/actions/items';
import { connect } from 'react-redux';

class Itemslist extends React.Component {

    componentDidMount() {
        this.props.dispatchSetItems()
    }

    render() {
    return (
        <div>
          Items List 
          {this.props.items.map(i => <Itemcard {...i} /> )}
        </div>
    );
    }
}

const mapStateToProps = state => ({ items: state })

const mapDispatchToProps = dispatch => ({
    dispatchSetItems: () => dispatch( setItem() )
})
export default connect(mapStateToProps, mapDispatchToProps)(Itemslist)
