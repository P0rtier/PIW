import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import Home from "./pages/home/home";
import AddEstatePage from "./pages/addPage/addEstatePage";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import BookDeatilsPage from "./pages/bookPage/bookDetailsPage";
import LoginPage from "./pages/loginPage/loginPage";
import Register from "./pages/registerPage/Register";
import { db } from "./Firebase/Init";
import { addDoc, collection, onSnapshot } from "firebase/firestore";
import EditPage from "./pages/editPage/editPage";
import { RealEstateProvider } from "./pages/home/RealEstateContext";

function App() {
  const realEstateMockData = [];
  const [realEstateData, setRealEstateData] = useState(realEstateMockData);

  useEffect(() => {
    const realEstateDbData = collection(db, "real_estates");
    const unsubscribe = onSnapshot(realEstateDbData, (snapshot) => {
      const realEstates = snapshot.docs.map((doc) => ({
        id: doc.id,
        data: doc.data(),
      }));
      setRealEstateData(realEstates);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const handleNewRealEstateSubmit = (newRealEstate) => {
    const realEstateDbData = collection(db, "real_estates");
    addDoc(realEstateDbData, newRealEstate)
      .then(console.log("Dodalem"))
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="App">
      <RealEstateProvider>
        <Navbar />
        <BrowserRouter>
          <Routes>
            <Route
              path="/login"
              element={
                localStorage.getItem("user") ? (
                  <Navigate to="/" />
                ) : (
                  <LoginPage />
                )
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
            <Route path="/edit-page" element={<EditPage />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/home" element={<Navigate to="/" />} />
          </Routes>
        </BrowserRouter>
      </RealEstateProvider>
    </div>
  );
}

export default App;
