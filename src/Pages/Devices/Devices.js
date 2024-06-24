import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import '../Home/Doctor/DoctorsCarousel.css'; // Import CSS file 

const Devices = ({ device }) => { // Corrected prop name to 'device'
  const { name, Quantity , Price , pic } = device; // Corrected 'Device' to 'device'
  
  return (
    <Card className="doctor-card" style={{ width: '18rem' }}> {/* Adjust the card width as needed */}
      <Card.Img variant="top" src={pic} style={{ Width: "60px", height: "auto" }} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <strong>quantity :</strong> {Quantity}
        </Card.Text>
        <Card.Text>
          <strong> price :</strong> {Price} DA
        </Card.Text>
        <Link to="/success" className="text-decoration-none">
          <Button variant="primary" className="d-block mx-auto">BYE NOW</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default Devices;
