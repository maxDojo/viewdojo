import React, { useState } from "react";
import { TextInput, StyleSheet, View, Button } from "react-native";
import { boldFont, lightFont } from "../styles/global";

export default function SearchBar({ navigation }) {
  const [input, setInput] = useState("");
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputBar}
        onChangeText={(text) => {
          setInput(text);
        }}
        placeholder="Search Videos"
      />
      <Button
        title="Search"
        onPress={() => navigation.navigate("Result", { query: input })}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  inputBar: {
    flex: 8,
    fontFamily: lightFont,
  },
  container: {
    flexDirection: "row",
    width: "100%",
  },
  button: {
    flex: 2,
    fontFamily: boldFont,
  },
});
