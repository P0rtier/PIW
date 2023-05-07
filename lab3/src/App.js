import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import Home from "./pages/home/home";
import AddEstatePage from "./pages/addPage/addEstatePage";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

function App() {
  const realEstateMockData = [
    {
      price: "80000",
      bedrooms: 6,
      location: "Wroclaw",
      description: "Bardzo ladny domek na obrzezach Wroclawia",
    },
    {
      price: "11000",
      bedrooms: 5,
      location: "Leszno",
      description: "dobra",
    },
    {
      price: "testPrice3",
      bedrooms: 3,
      location: "Wroclaw",
      description: "desc",
    },
    {
      price: "testPrice4",
      bedrooms: 4,
      location: "Wroclaw",
      description: "desc",
    },
    {
      price: "testPrice5",
      bedrooms: 5,
      location: "Wroclaw",
      description: "desc",
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
                <Home realEstateMockData={realEstateData} />
              </>
            }
          />

          <Route
            path="/add-estate"
            exact={false}
            element={
              <>
                <AddEstatePage handler={handleNewRealEstateSubmit} />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
