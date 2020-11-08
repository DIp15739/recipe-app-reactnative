import { LIST } from "../../data/dummy-data";

const initialState = {
  recipe: LIST,
  filteredRecipe: LIST,
  wishListRecipe: [],
};

const recipeReducer = (state = initialState, action) => {
  return state;
};

export default recipeReducer;
