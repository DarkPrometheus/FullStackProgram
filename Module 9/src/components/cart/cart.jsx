import React, { Component } from 'react';
import { connect } from "react-redux";
import product from '../product/product';
import ProductInCart from '../productInCart/productInCart';
import { incrementCartCounter } from './../../store/actions/actions';

class Cart extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <h1>H1 here!</h1>

                <ul>
                    {this.props.cart.map(p =>
                        <li>
                            <ProductInCart data={p} key={p.product.id}>
                            </ProductInCart>
                        </li>
                    )}
                </ul>
            </div>
         );
    }
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart
    }
}

export default connect(null, {incrementCartCounter})(Cart);