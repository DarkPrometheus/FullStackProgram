import React from 'react';
import './App.css';
import NavBar from './components/navBar/navBar';
import Footer from './components/footer/footer'
import Catalog from './components/catalog/catalog';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from './components/carousel/caroulsel'
import Todo from './components/todo/todo';

function App(){
  return (
    <div className="App">
      <NavBar />
      
      <div className="container">
        <Carousel />
        <hr/>
        <Catalog />
        <hr/>
        <Todo/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;