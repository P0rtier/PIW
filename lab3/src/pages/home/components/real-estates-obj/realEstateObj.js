import React from "react";
import exampleHouse from "../../../../assets/img/example-house.jpg";
import "./realEstateObj.css";

const RealEstateObj = ({ price, bedrooms, location, description }) => {
  return (
    <div className="real-estate-container">
      <img src={exampleHouse} alt="" />
      <div className="real-estate-container__contents">
        <div className="contents-price">
          <p>{price}</p>
        </div>
        <div className="contents-bedrooms">
          <p>{bedrooms}</p>
        </div>
        <div className="contents-location">
          <p>{location}</p>
        </div>
        <div className="contents-desc">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default RealEstateObj;
