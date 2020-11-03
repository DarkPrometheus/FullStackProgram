import React, { Component } from 'react'
import Product from '../product/product';
import ProductService from './../../services/productService';
import "./catalog.css"
import Carousel from './../carousel/caroulsel'

class Catalog extends Component {
    state = {
        products: [],
        categories: [],
        selectedCategory: ''
    }

    render() { 

        let productsToDisplay = this.state.products;

        if (this.state.selectedCategory !== '') {
            productsToDisplay = productsToDisplay.filter((prod) => {
                if (prod.category === this.state.selectedCategory) {
                    return true;
                }

                return false;
            });
        }

        return (
            <div className="main">
                <Carousel/>
                <div className="categories">
                    <div
                        onClick={() => this.selectCategory('')}
                        key={''}
                        className="btn_Category">
                        All products
                    </div>
                    {this.state.categories.map((category) =>
                        <div
                            onClick={() => this.selectCategory(category)}
                            key={category}
                            className="btn_Category">{category}
                        </div>)}
                </div>

                <div className="Products">
                    { productsToDisplay.map((p) => <div className="columna"><Product data={p} key={p.id}/></div>) }
                </div>
            </div>
         );
    }

    selectCategory = (category) => {
        this.setState({selectedCategory: category})
    }

    async componentDidMount() {
        console.log("Load data here");

        let service = new ProductService();
        const data = await service.getProducts();
        this.setState({ products: data });

        let categories = [];
        
        data.forEach(element => {
            let found;
            categories.forEach(element2 => {
                if (element.category === element2) {
                    found = true;
                }
            });
            if (!found) {
                categories.push(element.category);
            }
        });
        console.log(categories);
        this.setState({ categories: categories });
    }
}
 
export default Catalog;