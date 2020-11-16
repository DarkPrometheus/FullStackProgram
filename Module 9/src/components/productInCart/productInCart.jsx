import React, { Component } from 'react'
import { removeProduct } from './../../store/actions/actions';
import { connect } from 'react-redux';

class ProductInCart extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <h1>{this.props.data.product.title}</h1>
            </div>
         );
    }

    removeProduct = () => {
        this.props.removeProduct(this.props.data);
    };
}
 
export default connect(null, {removeProduct})(ProductInCart);