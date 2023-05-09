import React from "react";
import exampleHouse from "../../../../assets/img/example-house.jpg";
import "./realEstateObj.css";
import { useNavigate } from "react-router-dom";
import {
  FaDollarSign,
  FaBed,
  FaMapMarkerAlt,
  FaBookOpen,
} from "react-icons/fa";

const RealEstateObj = ({ price, bedrooms, location, description }) => {
  const navigate = useNavigate();
  const routeChange = () => {
    let path = "/book-meeting";
    navigate(path);
  };
  return (
    <div className="real-estate-container">
      <img class="real-estate-container__image" src={exampleHouse} alt="" />
      <div className="real-estate-container__contents">
        <div className="flex contents-price">
          <FaDollarSign style={{ marginTop: "7px" }} />
          <p>{price}</p>
        </div>
        <div className="flex contents-bedrooms">
          <FaBed style={{ marginTop: "5px" }} />
          <p>{bedrooms}</p>
        </div>
        <div className="flex contents-location">
          <FaMapMarkerAlt style={{ marginTop: "5px" }} />
          <p>{location}</p>
        </div>
        <div className="flex contents-desc">
          <FaBookOpen style={{ marginTop: "5px" }} />
          <p>{description}</p>
        </div>
        <div className="flex contents-details">
          <button className="btn btn-success" onClick={routeChange}>
            Book
          </button>
        </div>
      </div>
    </div>
  );
};

export default RealEstateObj;
