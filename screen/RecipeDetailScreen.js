import React, { useEffect } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import {
  ScrollView,
  TouchableNativeFeedback,
} from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import { toggleWishList } from "../store/actions/recipe";

const RecipeDetailScreen = (props) => {
  const seletedRecipe = useSelector((state) => state.recipe.recipe);
  const { id } = props.route.params;
  const selectedRecipe = seletedRecipe.find((cat) => cat.id === id);
  const currentRecipeInWishList = useSelector((state) =>
    state.recipe.wishListRecipe.some((recipe) => recipe.id === id)
  );

  const dispatch = useDispatch();
  const toggleWishListHandler = () => {
    dispatch(toggleWishList(id));
  };

  useEffect(() => {
    props.navigation.setOptions({
      title: selectedRecipe.title,
      headerRight: () => (
        <View style={styles.headerIconButton}>
          <TouchableNativeFeedback
            activeOpacity={0.6}
            onPress={toggleWishListHandler}>
            <AntDesign
              name={currentRecipeInWishList ? "star" : "staro"}
              size={24}
              color="black"
            />
          </TouchableNativeFeedback>
        </View>
      ),
    });
  }, [currentRecipeInWishList]);

  return (
    <ScrollView>
      <Image source={{ uri: selectedRecipe.imageUrl }} style={styles.img} />
      <View style={styles.detail}>
        <Text>{selectedRecipe.duration}m</Text>
        <Text>{selectedRecipe.complexity.toUpperCase()}</Text>
        <Text>{selectedRecipe.affordability.toUpperCase()}</Text>
      </View>
      <Text style={styles.title}>Ingredients</Text>
      {selectedRecipe.ingredients.map((ingredient) => (
        <View style={styles.listView} key={ingredient}>
          <Text>{ingredient}</Text>
        </View>
      ))}
      <Text style={styles.title}>Steps</Text>
      {selectedRecipe.steps.map((step) => (
        <View style={styles.listView} key={step}>
          <Text>{step}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default RecipeDetailScreen;

const styles = StyleSheet.create({
  headerIconButton: {
    marginHorizontal: 20,
    overflow: "hidden",
    borderRadius: 10,
  },
  img: {
    width: "100%",
    height: 200,
  },
  detail: {
    flexDirection: "row",
    padding: 15,
    justifyContent: "space-around",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
  },
  listView: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 10,
  },
});
