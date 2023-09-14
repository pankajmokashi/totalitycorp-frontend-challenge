import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  filterItemsByCategory,
  filterItemsByPriceRange,
  filterItemsByRating,
  clearAllFilters,
} from "../../Redux/actions/shopActions";
import "./styles.css";
import { AiFillCloseSquare } from "react-icons/ai";

function FilterItems() {
  const dispatch = useDispatch();
  const [categoryFilters, setCategoryFilters] = useState([]);
  const [priceRangeFilters, setPriceRangeFilters] = useState({});
  const [ratingFilters, setRatingFilter] = useState(0);

  function categoryFilter(category) {
    const updatedFilters = [...categoryFilters];
    if (updatedFilters.includes(category)) {
      updatedFilters.splice(updatedFilters.indexOf(category), 1);
    } else {
      updatedFilters.push(category);
    }
    setCategoryFilters(updatedFilters);
    dispatch(filterItemsByCategory(updatedFilters));
  }

  const priceRangeFilter = (minPrice, maxPrice) => {
    setPriceRangeFilters({ minPrice, maxPrice });
    dispatch(filterItemsByPriceRange(minPrice, maxPrice));
  };

  const ratingFilter = (minRating) => {
    setRatingFilter(minRating);
    dispatch(filterItemsByRating(minRating));
  };

  const clearFilters = () => {
    setCategoryFilters([]);
    setPriceRangeFilters({});
    setRatingFilter(0);
    dispatch(clearAllFilters());
  };

  return (
    <div className="filter-div">
      <div className="close" onClick={clearFilters}>
        <AiFillCloseSquare />
      </div>
      <dl>
        <dt>Category</dt>
        <dd>
          <input
            type="checkbox"
            value={"Electronics & Appliances"}
            checked={categoryFilters.includes("Electronics & Appliances")}
            onChange={() => categoryFilter("Electronics & Appliances")}
          />
          Electronics & Appliances
        </dd>
        <dd>
          <input
            type="checkbox"
            value={"Home-Kitchen & Furniture"}
            checked={categoryFilters.includes("Home-Kitchen & Furniture")}
            onChange={() => categoryFilter("Home-Kitchen & Furniture")}
          />
          Home-Kitchen & Furniture
        </dd>
        <dd>
          <input
            type="checkbox"
            value={"Automotive & Outdoor Living "}
            checked={categoryFilters.includes("Automotive & Outdoor Living ")}
            onChange={() => categoryFilter("Automotive & Outdoor Living ")}
          />
          Automotive & Outdoor Living
        </dd>
      </dl>
      <dl>
        <dt>Price-Range</dt>
        <dd>
          <input
            type="number"
            placeholder="Min Price"
            value={priceRangeFilters.minPrice}
            onChange={(e) =>
              setPriceRangeFilters({
                ...priceRangeFilters,
                minPrice: e.target.value,
              })
            }
          />
          <input
            type="number"
            placeholder="Max Price"
            value={priceRangeFilters.maxPrice}
            onChange={(e) =>
              setPriceRangeFilters({
                ...priceRangeFilters,
                maxPrice: e.target.value,
              })
            }
          />
        </dd>
        <dd>
          <button
            onClick={() =>
              priceRangeFilter(
                priceRangeFilters.minPrice,
                priceRangeFilters.maxPrice
              )
            }
          >
            Apply Price Range
          </button>
        </dd>
      </dl>
      <dl>
        <dt>Ratings</dt>
        <dd>
          <input
            type="number"
            placeholder="Minimum Rating"
            value={ratingFilters}
            onChange={(e) => ratingFilter(e.target.value)}
          />
        </dd>
      </dl>
    </div>
  );
}

export default FilterItems;