import React, { useContext, useEffect, useState } from "react";
import "./editPage.css";
import { Navigate, useNavigate } from "react-router-dom";
import { RealEstateContext } from "../home/RealEstateContext";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../Firebase/Init";

const EditPage = () => {
  const { realEstateData, setRealEstateData } = useContext(RealEstateContext);
  const [city, setCity] = useState(realEstateData.data.location);
  const [price, setPrice] = useState(
    parseInt(
      realEstateData.data.price.slice(0, realEstateData.data.price.length - 3)
    )
  );
  const [bedrooms, setBedrooms] = useState(realEstateData.data.bedrooms);
  const [description, setDescription] = useState(
    realEstateData.data.description
  );

  const navigate = useNavigate();
  const routeChange = () => {
    let path = "/";
    navigate(path);
  };

  const checkValidity = () => {
    return price && bedrooms && city && description;
  };

  const handleFormSubmit = () => {
    if (checkValidity()) {
      const newRealEstate = {
        price: `${price} zł`,
        bedrooms: parseInt(bedrooms),
        location: city,
        description: description,
      };

      const docRef = doc(db, "real_estates", realEstateData.id);
      updateDoc(docRef, newRealEstate)
        .then(() => {
          alert("Updated Succesfully!");
          routeChange();
        })
        .catch((err) => console.log(err.message));
    } else {
      alert("Form invalid! Please give all neccessary information!");
      console.log("Form invalid!");
    }
  };

  return realEstateData.data.price !== "mock" ? (
    <div className="container">
      <div className="container-form">
        <div className="form-element">
          <label htmlFor="form-price">Enter price</label>
          <input
            type="number"
            placeholder={realEstateData.data.price}
            id="form-price"
            name="price"
            value={price}
            onChange={(event) => setPrice(event.target.value)}
          />
        </div>
        <div className="form-element">
          <label htmlFor="form-room">Enter bedrooms</label>
          <input
            type="number"
            placeholder={realEstateData.data.bedrooms}
            id="form-room"
            name="bedrooms"
            value={bedrooms}
            onChange={(event) => setBedrooms(event.target.value)}
          />
        </div>
        <div className="form-element">
          <label htmlFor="form-location">Enter city</label>
          <input
            type="text"
            placeholder={realEstateData.data.location}
            id="form-location"
            name="city"
            value={city}
            onChange={(event) => setCity(event.target.value)}
          ></input>
        </div>
        <div className="form-element">
          <label className="desc-tag" htmlFor="form-desc">
            Enter description
          </label>
          <textarea
            className="form-element"
            id="form-desc"
            name="description"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            placeholder={realEstateData.data.description}
          />
        </div>
        <div className="submit-button">
          <button className="btn btn-success" onClick={handleFormSubmit}>
            Submit
          </button>
        </div>
      </div>
    </div>
  ) : (
    <>
      <Navigate to="/" />
    </>
  );
};

export default EditPage;
