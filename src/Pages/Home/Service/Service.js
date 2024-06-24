import React, { useState } from "react";
import { Link } from "react-router-dom";

const Service = (props) => {
  const { id, name, countDoctors, openDays, pic } = props.service;
  const [isHovered, setIsHovered] = useState(false);

  const cardStyle = {
    fontSize: "2em",
    color: isHovered ? "#0B6477" : "#fff",
    backgroundColor: "#0B6477",
    borderRadius : "0.78em",
    padding: "0.85em 0.75em",
    margin: "1rem",
    position: "relative",
    zIndex: 1,
    overflow: "hidden",
    transition: "color 0.35s, background-color 0.35s, border-color 0.35s"
  };

  const cardBackgroundStyle = {
    content: "",
    background: "#ecf0f1",
    position: "absolute",
    zIndex: -1,
    padding: "0.85em 0.75em",
    display: "block",
    left: 0,
    right: 0,
    top: "100%",
    bottom: "-100%",
    transition: "top 0.35s, bottom 0.35s"
  };

  if (isHovered) {
    cardBackgroundStyle.top = 0;
    cardBackgroundStyle.bottom = 0;
  }

  return (
    <>
      <div className="col-12 col-md-6 col-lg-4">
        <div
          className="card service-card"
          style={cardStyle}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img src={pic} className="card-img-top" alt="..." height="200" />
          <div className="card-body">
            <h4 className="card-title text-center">{name}</h4>
            <h6>
              <i className="fas fa-user-nurse"></i> Specialised Doctors: {countDoctors}
            </h6>
            <h6>
              <i className="fas fa-calendar-week"></i> Open: {openDays}
            </h6>
            <Link to={`/service/${id}`} className="text-decoration-none">
              <button className="default-btn d-block mx-auto">Details</button>
            </Link>
          </div>
          <div style={cardBackgroundStyle}></div>
        </div>
      </div>
    </>
  );
};

export default Service;
