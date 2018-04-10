import React from "react";
import { Carousel } from "antd";
import "./Carousel.css"

const Jumbotron = props =>

  <Carousel 
    autoplay
    >
    <div className="regular slider slick-initialized slick-slider">
    <img className="carspics" src="https://res.cloudinary.com/archcastanddesign/image/upload/v1522213536/arch052.jpg" />
    </div>
    <div className="regular slider slick-initialized slick-slider">
    <img className="carspics" src="https://res.cloudinary.com/archcastanddesign/image/upload/v1522213536/arch039.jpg" />
    <h3>Luxury Home Design</h3></div>
    <div className="regular slider slick-initialized slick-slider">
    <img className="carspics"src="https://res.cloudinary.com/archcastanddesign/image/upload/v1522213536/arch009.jpg" />
    <h3>Luxury Home Design</h3></div>
    <div className="regular slider slick-initialized slick-slider">
    <img className="carspics"src="https://res.cloudinary.com/archcastanddesign/image/upload/v1522213536/arch027.jpg" />
    <h3>Luxury Home Design</h3></div>
  </Carousel>

  
// 
  // <Carousel className="carousel carousel-slider"
  //  fixedItem={<button className='btn'>Contact</button>}
  //   options={{ fullWidth: true, indicators: true }}
  //   images={[
  //     'https://res.cloudinary.com/archcastanddesign/image/upload/v1522213536/arch052.jpg',
  //     'https://res.cloudinary.com/archcastanddesign/image/upload/v1522213536/arch039.jpg',
  //     'https://res.cloudinary.com/archcastanddesign/image/upload/v1522213536/arch009.jpg',
  //     'https://res.cloudinary.com/archcastanddesign/image/upload/v1522213536/for_boris_182.jpg',
  //     'https://res.cloudinary.com/archcastanddesign/image/upload/v1522213536/arch027.jpg'
  //   ]}>
   
  // </Carousel>;

  export default Jumbotron;