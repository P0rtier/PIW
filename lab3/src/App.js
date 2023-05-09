import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import Home from "./pages/home/home";
import AddEstatePage from "./pages/addPage/addEstatePage";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import BookDeatilsPage from "./pages/bookPage/bookDetailsPage";

function App() {
  const realEstateMockData = [
    {
      price: "80000 zł",
      bedrooms: 6,
      location: "Wrocław",
      description: "A cozy house on the outskirts of Wrocław",
    },
    {
      price: "11000 zł",
      bedrooms: 5,
      location: "Leszno",
      description: "Great neighborhood and a good school nearby",
    },
    {
      price: "35000 zł",
      bedrooms: 3,
      location: "Kraków",
      description: "A beautiful building near the center of Krakow",
    },
    {
      price: "150000 zł",
      bedrooms: 4,
      location: "Warszawa",
      description: "Great neighbourhood",
    },
    {
      price: "60000 zł",
      bedrooms: 5,
      location: "Wroclaw",
      description: "Very good place",
    },
  ];

  const [realEstateData, setRealEstateData] = useState(realEstateMockData);

  const handleNewRealEstateSubmit = (newRealEstate) => {
    setRealEstateData((prevRealEstateData) => [
      ...prevRealEstateData,
      newRealEstate,
    ]);
  };

  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <Home realEstateData={realEstateData} />
              </>
            }
          />

          <Route
            path="/add-estate"
            element={
              <>
                <AddEstatePage addRealEstate={handleNewRealEstateSubmit} />
              </>
            }
          />

          <Route path="/book-meeting" element={<BookDeatilsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
