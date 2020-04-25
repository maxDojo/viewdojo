import React from "react";
import { View, Text, Button, TextInput, ImageBackground } from "react-native";
import { globalStyles } from "../styles/global";
import SearchBar from "../shared/searchBar";

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
      <SearchBar navigation={navigation} />
      <Button title="Go to View Screen!" onPress={handlePress} />
    </ImageBackground>
  );
};

export default Home;
