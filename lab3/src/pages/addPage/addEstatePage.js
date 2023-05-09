import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./addEstatePage.css";

const AddEstatePage = ({ addRealEstate }) => {
  const [city, setCity] = useState("");
  const [price, setPrice] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [description, setDescription] = useState("");

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
      console.log("Form valid");

      const newRealEstate = {
        price: `${price} zł`,
        bedrooms: parseInt(bedrooms),
        location: city,
        description: description,
      };

      addRealEstate(newRealEstate);
      routeChange();
    } else {
      alert("Form invalid! Please give all neccessary information!");
      console.log("Form invalid!");
    }
  };

  return (
    <div className="container">
      <div className="container-form">
        <div className="form-element">
          <label htmlFor="form-price">Enter price</label>
          <input
            type="number"
            placeholder="Price"
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
            placeholder="Number of Bedrooms"
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
            placeholder="City"
            id="form-location"
            name="city"
            value={city}
            onChange={(event) => setCity(event.target.value)}
          />
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
            placeholder="Description"
          />
        </div>
        <div className="submit-button">
          <button className="btn btn-success" onClick={handleFormSubmit}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddEstatePage;
