import React, { useEffect } from "react";
import RecipeList from "../components/RecipeList";
import { CATEGORIES } from "../data/dummy-data";
import { useSelector } from "react-redux";
import { Text, View, StyleSheet } from "react-native";

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

  if (displayList.length === 0) {
    return (
      <View style={styles.textView}>
        <Text style={styles.text}>
          No Recipe found, maybe check your filters.
        </Text>
      </View>
    );
  }

  return <RecipeList listData={displayList} navigation={props.navigation} />;
};

export default RecipeListScreen;

const styles = StyleSheet.create({
  textView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontWeight: "bold",
    fontSize: 15,
  },
});
