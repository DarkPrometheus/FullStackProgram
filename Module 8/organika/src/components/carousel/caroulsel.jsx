import React from "react";
import Slider from "react-slick";

export default function SimpleSlider() {
  var settings = {
      dots: true,
      fade: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      arrows: true,
      slidesToScroll: 1,
      className:"slides",
  };
  return (
    <Slider {...settings}>
      <div className="contenedor">
         <img src="/products/product-1.jpg"/>
      </div>
      <div className="contenedor">
         <img src="/products/product-2.jpg"/>
      </div>
      <div className="contenedor">
        <img src="/products/product-3.jpg"/>
      </div>
      <div className="contenedor">
        <img src="/products/product-4.jpg"/>
      </div>
      <div className="contenedor">
        <img src="/products/product-5.jpg"/>
      </div>
      <div className="contenedor">
        <img src="/products/product-6.jpg"/>
      </div>
    </Slider>
  );
}