import React, { Component } from 'react';
import QuantityPicker from '../quantityPicker/quantityPicker';
import "./product.css"

class Product extends Component {
    state = {

    };

    render() { 
        return (
            <div className="product">
                <h1>Title</h1>
                <img className="img" src="https://picsum.photos/150/200" ></img>
                <div className="labesl">
                    <label>Total: </label>
                    <label>Price: </label>
                </div>

                <QuantityPicker></QuantityPicker>

            </div>
        );
    }
}

export default Product;