import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./navBar.css"
import { connect } from 'react-redux';

class NavBar extends Component{
    render() { 
        return ( 
            <div className="nav">
                <div className="nav-container nav-container-1">
                    <Link to="/">Home</Link>
                    <Link to="/catalog">Catalog</Link>
                    <Link to="/todo">Todo app</Link>
                    <Link to="/about">About</Link>
                </div>
                <div className="nav-container"></div>
                <div className=" nav-container nav-container-2">
                    <Link className="btn btn-outline-info my-2 my-sm-0" to="/cart">
                        <i className="fa fa-shopping-cart cart-icon" aria-hidden="true"></i>
                        View cart
                        <span className="badge badge-primary cart-badge">
                        {this.props.count}
                        </span>
                    </Link>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
      //count: state.cart.length,
  }  
};

export default connect(mapStateToProps, null)(NavBar);