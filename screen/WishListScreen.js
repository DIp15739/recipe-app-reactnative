import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import RecipeList from "../components/RecipeList";
import { useSelector } from "react-redux";
import { Entypo } from "@expo/vector-icons";
import { TouchableNativeFeedback } from "react-native-gesture-handler";

const WishListScreen = (props) => {
  useEffect(() => {
    props.navigation.setOptions({
      headerLeft: () => (
        <View style={styles.headerIconButton}>
          <TouchableNativeFeedback
            activeOpacity={0.6}
            onPress={() => props.navigation.toggleDrawer()}>
            <Entypo name="menu" size={30} color="black" />
          </TouchableNativeFeedback>
        </View>
      ),
    });
  }, []);

  const wishRecipes = useSelector((state) => state.recipe.wishListRecipe);

  return <RecipeList listData={wishRecipes} navigation={props.navigation} />;
};

export default WishListScreen;

const styles = StyleSheet.create({
  headerIconButton: {
    marginHorizontal: 25,
    overflow: "hidden",
    borderRadius: 10,
  },
});
