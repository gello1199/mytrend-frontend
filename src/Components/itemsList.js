import React from 'react';
import { setItem } from '../Redux/actions/items';
import { connect } from 'react-redux';

class Itemslist extends React.Component {

    componentDidMount() {
        this.props.dispatchSetItems()
    }

    render() {
    return (
        <div>
          Items List 
          <ul>
            
          </ul>  
        </div>
    );
    }
}

const mapDispatchToProps = dispatch => ({
    dispatchSetItems: () => dispatch( setItem() )
})
export default connect(null, mapDispatchToProps)(Itemslist)
