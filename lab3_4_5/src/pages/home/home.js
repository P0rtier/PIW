import React, { useCallback, useMemo } from "react";
import "./home.css";
import RealEstateFilter from "./components/real-estate-filter/realEstateFilter";

const Home = ({ realEstateData }) => {
  // Zadanie na +0.5 pkt, użycie hooków useCallback() oraz useMemo() do
  // obliczania aktualnej sumy wartości ogłoszen w zł
  const calculateNetWorth = useCallback(() => {
    let netWorth = 0;
    realEstateData
      .map((elem) => elem.data.price)
      .forEach((price) => {
        const priceValue = parseInt(price.slice(0, -3));
        netWorth += priceValue;
      });
    return netWorth;
  }, [realEstateData]);

  const netWorth = useMemo(() => calculateNetWorth(), [calculateNetWorth]);

  return (
    <>
      <div className="home-container">
        <RealEstateFilter realEstateMockData={realEstateData} />
        <div className="net-worth">
          <h1>Current estates net worth: </h1>
          <p>{netWorth} zł</p>
        </div>
      </div>
    </>
  );
};

export default Home;
