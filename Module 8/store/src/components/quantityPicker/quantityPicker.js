import React, { Component } from 'react';

class QuantityPicker extends Component {
    state = {
        quantity: 1,
    };

    render() { 
        return ( 
            <div>
                <button className="btn btn-sm btn-info">+</button>
                <label className="quantity">{this.state.quantity}</label>
                <button onClick={this.increase} className="btn btn-sm btn-info">-</button>
            </div>
         );
    }

    increase = () => {
        let val = this.state.quantity
        val += 1;

        this.setState({quantity:val})
    }
}
 
export default QuantityPicker;