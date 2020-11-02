import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableNativeFeedback } from "react-native-gesture-handler";

const CategoryGridTile = (props) => {
  return (
    <View style={styles.gridItem}>
      <TouchableNativeFeedback style={{ flex: 1 }} onPress={props.onSelect}>
        <View
          style={{ ...styles.container, ...{ backgroundColor: props.color } }}>
          <Text style={styles.text} numberOfLines={2}>
            {props.title}
          </Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

export default CategoryGridTile;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    elevation: 5,
    borderRadius: 10,
    overflow: "hidden",
  },
  container: {
    flex: 1,
    height: 150,
    padding: 15,
    borderRadius: 10,
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  text: {
    fontFamily: "Bitter-BoldItalic",
    textAlign: "right",
    fontSize: 19,
  },
});
