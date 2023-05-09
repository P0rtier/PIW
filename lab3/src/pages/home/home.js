import React from "react";
import "./home.css";
import RealEstateFilter from "./components/real-estate-filter/realEstateFilter";

const Home = ({ realEstateData }) => {
  return (
    <div className="home-container">
      <RealEstateFilter realEstateMockData={realEstateData} />
    </div>
  );
};

export default Home;
