import { createStackNavigator } from "react-navigation-stack";
import About from "../screens/about";
import React from "react";
import Header from "../shared/header";

const screens = {
  About: {
    screen: About,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => (
          <Header navigation={navigation} title="About ViewDojo" />
        ),
      };
    },
  },
};
const AboutStack = createStackNavigator(screens);

export default AboutStack;
