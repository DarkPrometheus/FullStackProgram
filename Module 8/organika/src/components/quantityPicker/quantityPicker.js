import React, { Component } from 'react';
import "./quPick.css"

class QuantityPicker extends Component {
    state = {
        quantity: 1,
        minumum: 1,
    };

    render() { 
        return ( 
            <div className="containerQP">
                <div className="btns">
                    <button disable={this.state.minumum === this.state.quantity} onClick={this.decrease} className="btn">-</button>
                    <button onClick={this.increase} className="btn">+</button>
                </div>
                <label className="quantity">{this.state.quantity}</label>
            </div>
         );
    }

    increase = () => {
        let current = this.state.quantity
        current += 1;

        this.setState({quantity : current})
    }

    decrease = () => {
        let current = this.state.quantity;

        if (current > 1) {
            current -= 1;
        }

        this.setState({quantity : current})
    }
}
 
export default QuantityPicker;