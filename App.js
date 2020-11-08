import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import RecipeNavigator from "./navigation/RecipeNavigator";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import recipeReducer from "./store/reducers/recipe";

const rootReducer = combineReducers({
  recipe: recipeReducer,
});

const store = createStore(rootReducer);

const customFonts = () => {
  return Font.loadAsync({
    "Bitter-Italic": require("./assets/fonts/Bitter-Italic.ttf"),
    "Bitter-BoldItalic": require("./assets/fonts/Bitter-BoldItalic.ttf"),
    "Artifika-Regular": require("./assets/fonts/Artifika-Regular.ttf"),
  });
};

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (!fontsLoaded) {
    return (
      <AppLoading
        startAsync={customFonts}
        onFinish={() => setFontsLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }

  return (
    <Provider store={store}>
      <React.Fragment>
        <RecipeNavigator />
        <StatusBar style="dark" />
      </React.Fragment>
    </Provider>
  );
}

const styles = StyleSheet.create({
  root: {},
});
