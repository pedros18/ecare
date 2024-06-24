import React from "react";
import useDoctors from "../../../Hooks/useDoctors";
import DoctorsCarousel from "../Doctor/DoctorsCarousel";
import './Appointement.css';

const AppointmentSection = () => {
  const [doctors] = useDoctors();

  return (
    <div className="my-5 appointment-section">
      <h2 className="text-center blue-color">
        <i className="fas fa-flask"></i> Request Appointment
      </h2>
      <p className="text-center fs-5">Make sure to make an appointment before visiting our clinic</p>
      <div className="container">
        <DoctorsCarousel doctors={doctors} />
      </div>
    </div>
  );
};

export default AppointmentSection;
