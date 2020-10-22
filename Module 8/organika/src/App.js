import React from 'react';
import './App.css';
import NavBar from './components/navBar/navBar';
import Footer from './components/footer/footer'
import Product from './components/product/product';

function App() {
  return (
    <div className="App">

      <NavBar></NavBar>

      <div className="main">
        <div className="columna"><Product></Product></div>
        <div className="columna"><Product></Product></div>
        <div className="columna"><Product></Product></div>
      </div>
      
      <Footer></Footer>
    </div>
  );
}

export default App;
