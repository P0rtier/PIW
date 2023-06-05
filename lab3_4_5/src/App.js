import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import Home from "./pages/home/home";
import AddEstatePage from "./pages/addPage/addEstatePage";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import BookDeatilsPage from "./pages/bookPage/bookDetailsPage";
import LoginPage from "./pages/loginPage/loginPage";
import axios from "axios";
import Register from "./pages/registerPage/Register";

function App() {
  const realEstateMockData = [];
  const [realEstateData, setRealEstateData] = useState(realEstateMockData);

  useEffect(() => {
    axios
      .get("/estate_data/estate.json")
      .then((response) => {
        setRealEstateData(response.data);
      })
      .catch((error) => {
        console.error("Error occured, stacktrace: ", error);
      });
  }, []);

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
            path="/login"
            element={
              localStorage.getItem("user") ? <Navigate to="/" /> : <LoginPage />
            }
          />
          <Route
            path="/add-estate"
            element={
              localStorage.getItem("user") ? (
                <AddEstatePage addRealEstate={handleNewRealEstateSubmit} />
              ) : (
                <Navigate to="/login" />
              )
            }
          />

          <Route path="/book-meeting" element={<BookDeatilsPage />} />

          <Route
            path="/"
            element={
              <>
                {localStorage.getItem("user") ? (
                  <Home realEstateData={realEstateData} />
                ) : (
                  <Navigate to="/login" />
                )}
              </>
            }
          />
          <Route path="/register" element={<Register />}></Route>
          <Route path="/home" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
