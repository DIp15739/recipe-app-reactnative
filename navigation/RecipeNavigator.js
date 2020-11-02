import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import RecipeCategoryScreen from "../screen/RecipeCategoryScreen";
import RecipeDetailScreen from "../screen/RecipeDetailScreen";
import RecipeListScreen from "../screen/RecipeListScreen";
import { enableScreens } from "react-native-screens";
import WishListScreen from "../screen/WishListScreen";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import FilterScreen from "../screen/FilterScreen";

const HomeStack = createStackNavigator();
enableScreens();

const RecpiStack = (props) => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#bbdef0",
        },
        headerTintColor: "#000",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        headerTitleAlign: "center",
      }}>
      <HomeStack.Screen
        name="Recipe Category"
        component={RecipeCategoryScreen}
        options={{ title: "Recipe Category" }}
      />
      <HomeStack.Screen name="Recipe List" component={RecipeListScreen} />
      <HomeStack.Screen name="Recipe Detail" component={RecipeDetailScreen} />
    </HomeStack.Navigator>
  );
};

const WistStack = createStackNavigator();
const WistListStack = (props) => {
  return (
    <WistStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#bbdef0",
        },
        headerTintColor: "#000",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        headerTitleAlign: "center",
      }}>
      <WistStack.Screen name="Wish List" component={WishListScreen} />
      <WistStack.Screen name="Recipe Detail" component={RecipeDetailScreen} />
    </WistStack.Navigator>
  );
};

const FilterStack = createStackNavigator();
const FilterScreenStack = (props) => {
  return (
    <FilterStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#bbdef0",
        },
        headerTintColor: "#000",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        headerTitleAlign: "center",
      }}>
      <FilterStack.Screen name="Filter" component={FilterScreen} />
    </FilterStack.Navigator>
  );
};

const Tab = createMaterialBottomTabNavigator();
const RecpiFavNanigator = (props) => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#e07a5f"
      shifting
      barStyle={{ backgroundColor: "#3d405b" }}>
      <Tab.Screen
        name="Home"
        component={RecpiStack}
        options={{
          tabBarColor: "#3d405b",
          tabBarLabel: "Recipe",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="restaurant" size={25} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Wish List"
        component={WistListStack}
        options={{
          tabBarColor: "#555b6e",
          tabBarLabel: "Wish List",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="grin-hearts" size={25} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const Drawer = createDrawerNavigator();
const RecipeDrawer = (props) => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Wish List">
        <Drawer.Screen name="Recipe" component={RecpiFavNanigator} />
        <Drawer.Screen name="Filter" component={FilterScreenStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default RecipeDrawer;

// const Tab = createBottomTabNavigator();
{
  /* <Tab.Navigator
screenOptions={({ route }) => ({
  tabBarIcon: ({ color, size }) => {
    if (route.name === "Home") {
      return (
        <MaterialIcons name="restaurant" size={size} color={color} />
      );
    } else if (route.name === "Wish List") {
      return (
        <FontAwesome5 name="grin-hearts" size={size} color={color} />
      );
    }
  },
})}
tabBarOptions={{
  activeTintColor: "#e85d04",
  inactiveTintColor: "#1d3557",
}}> */
}
