import React from 'react';
import './App.css';
import NavBar from './components/navBar/navBar';
import Footer from './components/footer/footer'
import Catalog from './components/catalog/catalog';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Todo from './components/todo/todo';

import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './components/Home/Home';
import About from './components/About/About';
import Cart from './components/cart/cart';

function App(){
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        
        <div className="container">
          <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/catalog" exact component={Catalog}></Route>
            <Route path="/about" exact  component={About}></Route>
            <Route path="/todo" exact component={Todo}></Route>
            <Route path="/cart" exact  component={Cart}></Route>
          </Switch>
        </div>

        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;