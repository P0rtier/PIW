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
      filterValues.price === "" || item.price.includes(filterValues.price);
    const isBedroomsMatched =
      filterValues.bedrooms === "" || item.bedrooms == filterValues.bedrooms;
    const isCityMatched =
      filterValues.city === "" || item.location.includes(filterValues.city);
    const isDescriptionMatched =
      filterValues.description === "" ||
      item.description.includes(filterValues.description);
    return (
      isPriceMatched &&
      isBedroomsMatched &&
      isCityMatched &&
      isDescriptionMatched
    );
  });

  const sortedData = [...filteredData].sort((a, b) => {
    if (filterValues.sort === "asc") {
      return parseInt(a.price) - parseInt(b.price);
    } else if (filterValues.sort === "desc") {
      return parseInt(b.price) - parseInt(a.price);
    }
    return 0;
  });

  return (
    <div>
      <h1>Currently available Real Estates</h1>
      <p>Filters</p>
      <div className="filter-container">
        <div className="filter-sort">
          <select
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
            type="text"
            placeholder="Price"
            name="price"
            value={filterValues.price}
            onChange={handleFilterChange}
          />
        </div>
        <div className="filter-bedrooms">
          <input
            type="text"
            placeholder="Bedrooms"
            name="bedrooms"
            value={filterValues.bedrooms}
            onChange={handleFilterChange}
          />
        </div>
        <div className="filter-city">
          <input
            type="text"
            placeholder="City"
            name="city"
            value={filterValues.city}
            onChange={handleFilterChange}
          />
        </div>
        <div className="filter-desc">
          <input
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
