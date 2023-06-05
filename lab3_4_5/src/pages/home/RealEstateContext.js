import React, { createContext, useState } from "react";

export const RealEstateContext = createContext();

export const RealEstateProvider = ({ children }) => {
  const realEstateMock = {
    id: 1,
    data: {
      bedrooms: 0,
      location: "mock",
      price: "mock",
      description: "mock",
    },
  };
  const [realEstateData, setRealEstateData] = useState(realEstateMock);

  return (
    <RealEstateContext.Provider value={{ realEstateData, setRealEstateData }}>
      {children}
    </RealEstateContext.Provider>
  );
};
