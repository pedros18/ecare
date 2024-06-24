//this is the scroller pages from the begnn

import React from "react";
import { useState } from "react";
import { Carousel } from "react-bootstrap";
import "./Banner.css";
import banner1 from "../../../Images/Banner/banner4.jpg";
import banner2 from "../../../Images/Banner/banner2.jpg";
import banner3 from "../../../Images/Banner/banner5.png";
import logo from "../../../Images/logo.png"
const Banner = () => {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} pause={false}>
      <Carousel.Item>
      <img className="d-block" style={{ width: '70%', margin: '0 auto' }} src={banner1} alt="First slide" />

        <Carousel.Caption className="caption rounded-3">
        <img src={logo} alt="Logo" className="logo img-fluid" style={{ width: '100px' }} /> {/* Adjust the width as needed */}
          <p>We ensures the best health care as well as clinical service</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img className="d-block" style={{ width: '70%', margin: '0 auto' }} src={banner2} alt="First slide" />


        <Carousel.Caption className="caption">
        <img src={logo} alt="Logo" className="logo img-fluid" style={{ width: '100px' }} /> {/* Adjust the width as needed */}
      
          <p>We ensures the best health care as well as clinical service</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img className="d-block" style={{ width: '70%', margin: '0 auto' }} src={banner3} alt="First slide" />


        <Carousel.Caption className="caption">
        <img src={logo} alt="Logo" className="logo img-fluid" style={{ width: '100px' }} /> {/* Adjust the width as needed */}
          <p>We ensures the best health care as well as clinical service</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
