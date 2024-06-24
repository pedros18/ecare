import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Devices from './Devices'; 
import '../Home/Doctor/DoctorsCarousel.css'; // Import CSS file

const DevicesCarousel = ({ devices }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
    };

    handleResize(); // Check initial width
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000, // Adjust the speed of transition
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2500 // Set autoplay speed to 3 seconds
  };

  return (
    <div >
      {isMobile ? (
        <div className="doctors-carousel">
          {devices.map((device) => (
            <div key={device.id} className="doctor-item">
              <Devices device={device} />
            </div>
          ))}
        </div>
      ) : (
        <Slider {...settings}>
          {devices.map((device) => (
            <div key={device.id}>
              <Devices device={device} />
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
};

export default DevicesCarousel;
