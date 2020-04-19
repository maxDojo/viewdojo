import React from "react";
import { View, Text, Button, ImageBackground } from "react-native";
import { globalStyles } from "../styles/global";

const Home = ({ navigation }) => {
  const handlePress = () => {
    navigation.navigate("View");
  };
  return (
    <ImageBackground
      source={require("../assets/bg1.jpg")}
      style={globalStyles.container}
    >
      <Text style={globalStyles.titleText}>This is the Home Screen</Text>
      <Button title="Go to View Screen!" onPress={handlePress} />
    </ImageBackground>
  );
};

export default Home;
