// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import Itemsform from '../../itemsForm';
// import { addItem } from '../../../Redux/actions/items';

// class Itemscontainer extends Component {

//     addItem = item => {
//         this.setState((prevState, prevProps) => {
//             return{
//                 items: [...prevState.items, item]
//             }
//         })
//     }

//     render() {
//         return (
//             <div>
//             <Itemsform createItem={this.addItem} />
//             <ul>
//                <li>{this.state.value}</li>
//             </ul>
//             </div>
//         );
//     }
// }

// const mapDispatchToProps = dispatch => {
//     return {
//     dispatchAddItem: (item) => dispatch ( item )
//     }
// }

// export default connect(null, mapDispatchToProps) (Itemscontainer);
