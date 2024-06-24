// why choose us
import React from "react";
import introBanner from "../../../Images/Banner/intro-banner.png";
import './Into.css'
const Intro = () => {
  return (
    <div className="container-intro overflow-hidden my-5 border bg-light shadow-lg rounded-3">
      <div className="row gy-4">
        <div className="col-12 col-md-5">
          <div className="p-2">
            <img className="img-fluid" src={introBanner} alt="Intro Banner" />
          </div>
        </div>
        <div className="col-12 col-md-7">
          <div className="p-2">
            <h2 className="fw-bold text-primary">WHY CHOOSE US?</h2>
            <p className="fs-6">
              We have high-quality doctors ready to help you recover and provide all kinds of medical treatment. Our research laboratories and expert doctors ensure the best health care with outstanding personal service.
            </p>
            <p className="fs-6">
              At Ecare, we believe human care is more than healthcare. We prioritize quality above all else.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
