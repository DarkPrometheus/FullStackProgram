import React, { Component } from 'react';
import QuantityPicker from '../quantityPicker/quantityPicker';
import "./product.css"
import { connect } from 'react-redux';
import { addProductToCart } from '../../store/actions/actions';

class Product extends Component {
    state = {
        data: this.props.data,
        Price: this.props.data.price,
        Total: this.props.data.price,
    };

    render() { 
        return (
            <div className="product">
                <h1>{this.props.data.title}</h1>
                <img alt="" className="img" src={"/products/" + this.props.data.image}></img>
                <div className="labesl">
                    <label>Total: ${this.state.Total}</label>
                    <label>Price: ${this.props.data.price}</label>
                </div>

                <QuantityPicker
                    minumun={1}
                    onValueChange={(Quantity) => this.handleQuantytiChange(Quantity)}
                ></QuantityPicker>
                <button onClick={this.addClicked} className="btn">Add</button>
            </div>
        );
    }

    addClicked = () => {
        console.log("Clicked");

        const addedProduct = {
            product: this.props.data,
            quantity: this.state.quantity
        };

        this.props.addProductToCart(addedProduct);
    }

    handleQuantytiChange = (Quantity) => {
        let total = this.state.Price * Quantity;
        
        this.setState({ Total: total })
    }
}

export default connect(null, { addProductToCart })(Product);