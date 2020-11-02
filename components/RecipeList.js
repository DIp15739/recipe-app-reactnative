import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import ListItem from "./ListItem";

const RecipeList = (props) => {
  const renderList = (itemData) => {
    return (
      <ListItem
        imageUrl={itemData.item.imageUrl}
        title={itemData.item.title}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        onSelect={() => {
          props.navigation.navigate("Recipe Detail", { id: itemData.item.id });
        }}
      />
    );
  };

  return (
    <View style={styles.root}>
      <FlatList
        data={props.listData}
        renderItem={renderList}
        style={styles.flatlist}
      />
    </View>
  );
};

export default RecipeList;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  flatlist: {
    width: "90%",
    marginVertical: 10,
  },
});
