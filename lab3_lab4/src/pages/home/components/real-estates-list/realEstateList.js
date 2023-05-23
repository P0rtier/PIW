import React from "react";
import RealEstateObj from "../real-estates-obj/realEstateObj";
import "./realEstateList.css";

const RealEstateList = ({ realEstateMockData }) => {
  return (
    <div className="real-estate-list-container">
      <div className="list">
        {realEstateMockData.map((realEstateData, index) => (
          <RealEstateObj
            key={index}
            price={realEstateData.price}
            bedrooms={realEstateData.bedrooms}
            location={realEstateData.location}
            description={realEstateData.description}
          />
        ))}
      </div>
    </div>
  );
};

export default RealEstateList;
