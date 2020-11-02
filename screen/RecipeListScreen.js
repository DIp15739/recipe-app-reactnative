import React, { useEffect } from "react";
import RecipeList from "../components/RecipeList";
import { CATEGORIES, LIST } from "../data/dummy-data";

const RecipeListScreen = (props) => {
  const { id } = props.route.params;
  const selectedRecipe = CATEGORIES.find((cat) => cat.id === id);

  const displayList = LIST.filter((list) => list.categoryIds.indexOf(id) >= 0);

  useEffect(() => {
    props.navigation.setOptions({ title: selectedRecipe.title });
  }, []);

  return <RecipeList listData={displayList} navigation={props.navigation} />;
};

export default RecipeListScreen;
