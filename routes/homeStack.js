// import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Home from "../screens/home";
import ViewScreen from "../screens/viewScreen";
import Result from "../screens/results";
import Header from "../shared/header";
import React from "react";

const screens = {
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header navigation={navigation} title="ViewDojo" />,
      };
    },
  },
  View: {
    screen: ViewScreen,
  },
  Result: {
    screen: Result,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => (
          <Header navigation={navigation} title="Search Results" />
        ),
      };
    },
  },
};

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerStyle: { backgroundColor: "#4D250A" },
  },
});

export default HomeStack;
