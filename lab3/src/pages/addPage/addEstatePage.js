import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddEstatePage = ({ handler }) => {
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
        price: price,
        bedrooms: bedrooms,
        location: city,
        description: description,
      };

      handler(newRealEstate);
      routeChange();
    } else {
      alert("Form invalid! Please give all neccessary information!");
      console.log("Form invalid!");
    }
  };

  return (
    <div className="container">
      <div class="form-element">
        <label htmlFor="form-price">Enter price</label>
        <input
          type="text"
          placeholder="Price"
          id="form-price"
          name="price"
          value={price}
          onChange={(event) => setPrice(event.target.value)}
        />
      </div>
      <div className="form-element">
        <label htmlFor="form-room">Enter number of rooms</label>
        <input
          type="text"
          placeholder="Number of Rooms"
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
        <label htmlFor="form-room">Enter description</label>
        <input
          type="text"
          placeholder="Description"
          id="form-desc"
          name="description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
      </div>
      <button className="btn btn-primary" onClick={handleFormSubmit}>
        Submit
      </button>
    </div>
  );
};

export default AddEstatePage;
