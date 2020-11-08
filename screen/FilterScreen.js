import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { Switch, TouchableNativeFeedback } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { setFilters } from "../store/actions/recipe";

const FilterSwitch = (props) => {
  return (
    <View style={styles.filterView}>
      <Text style={styles.lable}>{props.lable}</Text>
      <Switch
        trackColor={{ false: "#3d405b", true: "#3d405b" }}
        thumbColor="#e07a5f"
        value={props.state}
        onValueChange={props.onChange}
      />
    </View>
  );
};

const FilterScreen = (props) => {
  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);
  const dispatch = useDispatch();

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
      headerRight: () => (
        <View style={styles.headerIconButton}>
          <TouchableNativeFeedback activeOpacity={0.6} onPress={saveFilter}>
            <MaterialCommunityIcons
              name="content-save-edit"
              size={24}
              color="black"
            />
          </TouchableNativeFeedback>
        </View>
      ),
    });
  }, [props.navigation, isGlutenFree, isLactoseFree, isVegan, isVegetarian]);

  const saveFilter = () => {
    const appliedFilters = {
      glutenFree: isGlutenFree,
      lactoseFree: isLactoseFree,
      vegan: isVegan,
      vegetarian: isVegetarian,
    };
    dispatch(setFilters(appliedFilters));
  };

  return (
    <View style={styles.root}>
      <Text style={styles.title}>Available Filters / Restrictions</Text>
      <FilterSwitch
        lable="Gluten free"
        state={isGlutenFree}
        onChange={(newValue) => setIsGlutenFree(newValue)}
      />
      <FilterSwitch
        lable="Lactose Free"
        state={isLactoseFree}
        onChange={(newValue) => setIsLactoseFree(newValue)}
      />
      <FilterSwitch
        lable="Vegan"
        state={isVegan}
        onChange={(newValue) => setIsVegan(newValue)}
      />
      <FilterSwitch
        lable="Vegetarian"
        state={isVegetarian}
        onChange={(newValue) => setIsVegetarian(newValue)}
      />
    </View>
  );
};

export default FilterScreen;

const styles = StyleSheet.create({
  headerIconButton: {
    marginHorizontal: 25,
    overflow: "hidden",
    borderRadius: 10,
  },
  root: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    margin: 20,
    textAlign: "center",
  },
  filterView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
    marginVertical: 15,
  },
  lable: {
    fontSize: 20,
    fontWeight: "600",
  },
});
