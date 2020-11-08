export const TOGGLE_WISHLIST = "TOGGLE_WISHLIST";

export const toggleWishList = (id) => {
  return {
    type: TOGGLE_WISHLIST,
    recipeId: id,
  };
};
