import React, { useContext } from "react";
import exampleHouse from "../../../../assets/img/example-house.jpg";
import "./realEstateObj.css";
import { useNavigate } from "react-router-dom";
import {
  FaDollarSign,
  FaBed,
  FaMapMarkerAlt,
  FaBookOpen,
} from "react-icons/fa";
import { RealEstateContext } from "../../RealEstateContext";

const RealEstateObj = ({ realEstateDbData }) => {
  const { realEstateData, setRealEstateData } = useContext(RealEstateContext);
  const navigate = useNavigate();
  const routeChange = () => {
    let path = "/edit-page";
    navigate(path);
  };

  const editEstate = () => {
    setRealEstateData(realEstateDbData);
    routeChange();
  };
  return (
    <div className="real-estate-container">
      <img className="real-estate-container__image" src={exampleHouse} alt="" />
      <div className="real-estate-container__contents">
        <div className="flex contents-price">
          <FaDollarSign style={{ marginTop: "7px" }} />
          <p>{realEstateDbData.data.price}</p>
        </div>
        <div className="flex contents-bedrooms">
          <FaBed style={{ marginTop: "5px" }} />
          <p>{realEstateDbData.data.bedrooms}</p>
        </div>
        <div className="flex contents-location">
          <FaMapMarkerAlt style={{ marginTop: "5px" }} />
          <p>{realEstateDbData.data.location}</p>
        </div>
        <div className="flex contents-desc">
          <FaBookOpen style={{ marginTop: "5px" }} />
          <p>{realEstateDbData.data.description}</p>
        </div>
        <div className="flex contents-details">
          <button className="btn btn-success" onClick={editEstate}>
            Edit
          </button>
        </div>
      </div>
    </div>
  );
};

export default RealEstateObj;
