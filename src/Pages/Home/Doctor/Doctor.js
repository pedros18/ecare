import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import './DoctorsCarousel.css'; // Import your CSS file

const Doctor = ({ doctor }) => {
  const { name, categories, weekDays, time, fees, pic } = doctor;
  
  return (
    <Card className="doctor-card" style={{ width: '18rem' }}> {/* Adjust the card width as needed */}
      <Card.Img variant="top" src={pic} alt={name} style={{ maxWidth: "100%", height: "auto" }} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <strong>speciality :</strong> {categories}
        </Card.Text>
        <Card.Text>
          <strong>Open :</strong> {weekDays} {time}
        </Card.Text>
        <Card.Text>
          <strong>Cost :</strong> {fees}DA
        </Card.Text>
        <Link to="/addpatient" className="text-decoration-none">
          <Button variant="primary" className="d-block mx-auto">Appointment</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default Doctor;
