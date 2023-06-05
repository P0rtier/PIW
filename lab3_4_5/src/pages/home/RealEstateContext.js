import React, { createContext, useState } from "react";

export const RealEstateContext = createContext();

export const RealEstateProvider = ({ children }) => {
  const [realEstateData, setRealEstateData] = useState(null);

  return (
    <RealEstateContext.Provider value={{ realEstateData, setRealEstateData }}>
      {children}
    </RealEstateContext.Provider>
  );
};
