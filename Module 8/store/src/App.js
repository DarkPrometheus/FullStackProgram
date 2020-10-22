import React from 'react';
import './App.css';
import NavBar from './components/navBar/navBar';
import Footer from './components/footer/footer'
import QuantityPicker from './components/quantityPicker/QuantityPicker';

function App() {
  return (
    <div className="App">

      <NavBar></NavBar>

      <QuantityPicker></QuantityPicker>
      
      <Footer></Footer>
    </div>
  );
}

export default App;
