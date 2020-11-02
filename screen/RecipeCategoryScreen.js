import React, { useEffect } from "react";
import { StyleSheet, FlatList, View } from "react-native";
import { TouchableNativeFeedback } from "react-native-gesture-handler";
import CategoryGridTile from "../components/CategoryGridTile";
import { CATEGORIES } from "../data/dummy-data";
import { Entypo } from "@expo/vector-icons";

const RecipeCategoryScreen = (props) => {
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

  const renderGridItem = (data) => {
    return (
      <CategoryGridTile
        title={data.item.title}
        color={data.item.color}
        onSelect={() => {
          props.navigation.navigate("Recipe List", { id: data.item.id });
        }}
      />
    );
  };

  return (
    <FlatList data={CATEGORIES} renderItem={renderGridItem} numColumns={2} />
  );
};

export default RecipeCategoryScreen;

const styles = StyleSheet.create({
  headerIconButton: {
    marginHorizontal: 25,
    overflow: "hidden",
    borderRadius: 10,
  },
});
