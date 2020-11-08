import { LIST } from "../../data/dummy-data";
import { TOGGLE_WISHLIST } from "../actions/recipe";

const initialState = {
  recipe: LIST,
  filteredRecipe: LIST,
  wishListRecipe: [],
};

const recipeReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_WISHLIST:
      const existingIndex = state.wishListRecipe.findIndex(
        (recipe) => recipe.id === action.recipeId
      );
      if (existingIndex >= 0) {
        const updatedwishListRecipe = [...state.wishListRecipe];
        updatedwishListRecipe.splice(existingIndex, 1);
        return { ...state, wishListRecipe: updatedwishListRecipe };
      } else {
        const recipe = state.recipe.find(
          (recipe) => recipe.id === action.recipeId
        );
        return {
          ...state,
          wishListRecipe: state.wishListRecipe.concat(recipe),
        };
      }
    default:
      return state;
  }
};

export default recipeReducer;
