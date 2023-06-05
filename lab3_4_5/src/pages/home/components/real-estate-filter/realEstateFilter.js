import React, { useState } from "react";
import RealEstateList from "../real-estates-list/realEstateList";
import "./realEstateFilter.css";

const RealEstateFilter = ({ realEstateMockData }) => {
  const [filterValues, setFilterValues] = useState({
    price: "",
    bedrooms: "",
    city: "",
    description: "",
  });

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilterValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const filteredData = realEstateMockData.filter((item) => {
    const isPriceMatched =
      filterValues.price === "" || item.data.price.includes(filterValues.price);
    const isBedroomsMatched =
      filterValues.bedrooms === "" ||
      item.data.bedrooms === parseInt(filterValues.bedrooms);
    const isCityMatched =
      filterValues.city === "" ||
      item.data.location.includes(filterValues.city);
    const isDescriptionMatched =
      filterValues.description === "" ||
      item.data.description.includes(filterValues.description);
    return (
      isPriceMatched &&
      isBedroomsMatched &&
      isCityMatched &&
      isDescriptionMatched
    );
  });

  const sortedData = [...filteredData].sort((a, b) => {
    if (filterValues.sort === "asc") {
      return parseInt(a.data.price) - parseInt(b.data.price);
    } else if (filterValues.sort === "desc") {
      return parseInt(b.data.price) - parseInt(a.data.price);
    }
    return 0;
  });

  return (
    <div className="content">
      <h1 className="hero-title">Currently available Real Estates</h1>
      <p></p>
      <div className="filter-container">
        <div className="filter-sort">
          <select
            className="filter-select"
            name="sort"
            value={filterValues.sort}
            onChange={handleFilterChange}
          >
            <option value="">Sort by Price</option>
            <option value="asc">Price Ascending</option>
            <option value="desc">Price Descending</option>
          </select>
        </div>
        <div className="filter-price">
          <input
            className="filter-input"
            type="text"
            placeholder="Price"
            name="price"
            value={filterValues.price}
            onChange={handleFilterChange}
          />
        </div>
        <div className="filter-bedrooms">
          <input
            className="filter-input"
            type="text"
            placeholder="Bedrooms"
            name="bedrooms"
            value={filterValues.bedrooms}
            onChange={handleFilterChange}
          />
        </div>
        <div className="filter-city">
          <input
            className="filter-input"
            type="text"
            placeholder="City"
            name="city"
            value={filterValues.city}
            onChange={handleFilterChange}
          />
        </div>
        <div className="filter-desc">
          <input
            className="filter-input"
            type="text"
            placeholder="Description"
            name="description"
            value={filterValues.description}
            onChange={handleFilterChange}
          />
        </div>
      </div>
      <RealEstateList realEstateMockData={sortedData} />
    </div>
  );
};

export default RealEstateFilter;
