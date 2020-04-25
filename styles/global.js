import { StyleSheet, Dimensions } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "azure",
    fontFamily: mainFont,
  },
  titleText: {
    fontFamily: boldFont,
    fontSize: 18,
    color: "#333",
  },
  paragraph: {
    fontFamily: lightFont,
    marginVertical: 8,
    lineHeight: 20,
  },
});

export const width = Math.round(Dimensions.get("window").width);
export const mainFont = "oxygen-regular";
export const lightFont = "oxygen-light";
export const boldFont = "oxygen-bold";
