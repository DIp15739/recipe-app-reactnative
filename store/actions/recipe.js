export const TOGGLE_WISHLIST = "TOGGLE_WISHLIST";
export const SET_FILTER = "SET_FILTER";

export const toggleWishList = (id) => {
  return {
    type: TOGGLE_WISHLIST,
    recipeId: id,
  };
};

export const setFilters = (filterSettings) => {
  return {
    type: SET_FILTER,
    filters: filterSettings,
  };
};
