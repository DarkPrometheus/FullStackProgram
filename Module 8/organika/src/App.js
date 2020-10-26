import React from 'react';
import './App.css';
import NavBar from './components/navBar/navBar';
import Footer from './components/footer/footer'
import Catalog from './components/catalog/catalog';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from './components/carousel/caroulsel'

function App(){
  return (
    <div className="App">
      <NavBar />
      
      <Carousel></Carousel>

      <Footer/>
    </div>
  );
}

export default App;