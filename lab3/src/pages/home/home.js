import React, { useState } from "react";
import "./home.css";
import RealEstateFilter from "./components/real-estate-filter/realEstateFilter";

const Home = ({ realEstateMockData }) => {
  return (
    <div className="home-container">
      <RealEstateFilter realEstateMockData={realEstateMockData} />
    </div>
  );
};

export default Home;
