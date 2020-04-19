import { StyleSheet, Dimensions } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "azure",
    fontFamily: "lobster-regular",
  },
  titleText: {
    fontFamily: "lobster-regular",
    fontSize: 18,
    color: "#333",
  },
  paragraph: {
    fontFamily: "lobster-regular",
    marginVertical: 8,
    lineHeight: 20,
  },
});

export const width = Math.round(Dimensions.get("window").width);
