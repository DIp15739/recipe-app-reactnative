import { LIST } from "../../data/dummy-data";
import { SET_FILTER, TOGGLE_WISHLIST } from "../actions/recipe";

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
    case SET_FILTER:
      const appliedFilters = action.filters;
      const updatedfilteredRecipe = state.recipe.filter((recipe) => {
        if (appliedFilters.glutenFree && !recipe.isGlutenFree) {
          return false;
        }
        if (appliedFilters.lactoseFree && !recipe.isLactoseFree) {
          return false;
        }
        if (appliedFilters.vegan && !recipe.isVegan) {
          return false;
        }
        if (appliedFilters.vegetarian && !recipe.isVegetarian) {
          return false;
        }
        return true;
      });
      return { ...state, filteredRecipe: updatedfilteredRecipe };
    default:
      return state;
  }
};

export default recipeReducer;
