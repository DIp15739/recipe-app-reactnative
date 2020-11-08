import React, { useEffect } from "react";
import RecipeList from "../components/RecipeList";
import { CATEGORIES } from "../data/dummy-data";
import { useSelector } from "react-redux";

const RecipeListScreen = (props) => {
  const { id } = props.route.params;
  const selectedRecipe = CATEGORIES.find((cat) => cat.id === id);

  const availableRecipe = useSelector((state) => state.recipe.filteredRecipe);

  const displayList = availableRecipe.filter(
    (list) => list.categoryIds.indexOf(id) >= 0
  );

  useEffect(() => {
    props.navigation.setOptions({ title: selectedRecipe.title });
  }, []);

  return <RecipeList listData={displayList} navigation={props.navigation} />;
};

export default RecipeListScreen;
