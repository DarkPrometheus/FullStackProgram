import React, { Component } from 'react'
import Product from '../product/product';
import ProductService from './../../services/productService';
import "./catalog.css"

class Catalog extends Component {
    state = {
        products: []
    }

    render() { 
        return (
            <div className="main">
                {
                    this.state.products.map((p) => {
                        return <div className="columna"><Product data={p} key={p.id}/></div>
                    })
                }
            </div>
         );
    }

    componentDidMount() {
        console.log("Load data here");

        let service = new ProductService();
        const data = service.getProducts();
        this.setState({ products: data });
    }
}
 
export default Catalog;