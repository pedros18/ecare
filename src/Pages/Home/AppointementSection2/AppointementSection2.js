import React from "react";
import useDevices from "../../../Hooks/useDevices";
import DevicesCarousel from "../../Devices/DevicesCarousel";
import "../AppointmentSection/Appointement.css"

const AppointementSection2 = () => {
  const [devices] = useDevices();

  return (
    <div className="my-5 appointment-section ">
      <h2 className="text-center blue-color">
        Request Our IOMT Devices
      </h2>
      <p className="text-center fs-5">We offer the best health-smartwatch for you</p>
      <div className="container">
        <DevicesCarousel devices={devices} />
      </div>
    </div>
  );
};

export default AppointementSection2;
