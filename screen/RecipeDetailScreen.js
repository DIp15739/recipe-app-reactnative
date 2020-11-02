import React, { useEffect } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { LIST } from "../data/dummy-data";
import { AntDesign } from "@expo/vector-icons";
import {
  ScrollView,
  TouchableNativeFeedback,
} from "react-native-gesture-handler";

const RecipeDetailScreen = (props) => {
  const [headerIcon, setHeaderIcon] = React.useState(0);
  const { id } = props.route.params;
  const selectedRecipe = LIST.find((cat) => cat.id === id);

  useEffect(() => {
    props.navigation.setOptions({
      title: selectedRecipe.title,
      headerRight: () => (
        <View style={styles.headerIconButton}>
          <TouchableNativeFeedback
            activeOpacity={0.6}
            onPress={() => setHeaderIcon(console.log("Star button clicked"))}>
            <AntDesign name="star" size={24} color="black" />
          </TouchableNativeFeedback>
        </View>
      ),
    });
  }, []);

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
