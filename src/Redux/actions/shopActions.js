import {
  GET_PRODUCTS,
  FILTER_ITEMS_BY_CATEGORY,
  FILTER_ITEMS_BY_PRICE_RANGE,
  FILTER_ITEMS_BY_RATING,
  CLEAR_ALL_FILTERS,
} from "./actionTypes";

export const get_products = () => {
  return {
    type: GET_PRODUCTS,
  };
};

export const filterItemsByCategory = (category) => ({
  type: FILTER_ITEMS_BY_CATEGORY,
  payload: category,
});

export const filterItemsByPriceRange = (minPrice, maxPrice) => ({
  type: FILTER_ITEMS_BY_PRICE_RANGE,
  payload: { minPrice, maxPrice },
});

export const filterItemsByRating = (minRating) => ({
  type: FILTER_ITEMS_BY_RATING,
  payload: minRating,
});

export const clearAllFilters = () => ({
  type: CLEAR_ALL_FILTERS,
});
