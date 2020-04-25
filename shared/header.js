import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableNativeFeedback,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { width, boldFont } from "../styles/global";
import ViewScreen from "../screens/viewScreen";

function Header({ navigation, title }) {
  const openMenu = () => {
    navigation.openDrawer();
  };
  return (
    <View style={styles.header}>
      <TouchableNativeFeedback style={styles.iconContainer}>
        <MaterialIcons name="menu" size={28} onPress={openMenu} />
      </TouchableNativeFeedback>
      {/* <View> */}
      {/* <Image
          source={require("../assets/index.png")}
          style={styles.titleImage}
        /> */}
      <Text style={styles.headerText}>{title}</Text>
      {/* </View> */}
      {/* <View style={styles.headerRight}>
        <Text style={styles.helpText}>?</Text>
        <Image
          style={styles.profileImage}
          source={require("../assets/index.png")}
        />
      </View> */}
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    backgroundColor: "#4D250A",
    width: width,
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    // fontWeight: "bold",
    fontSize: 24,
    color: "#B3965F",
    letterSpacing: 1,
    fontFamily: boldFont,
  },

  iconContainer: {
    position: "absolute",
    left: 12,
    color: "#B3965F",
  },
  titleHolder: {
    flexDirection: "row",
  },
  titleImage: {
    width: 20,
    height: 20,
    marginHorizontal: 10,
    fontFamily: boldFont,
    borderRadius: 50,
  },
  profileImage: {
    borderRadius: 50,
    width: 48,
    height: 48,
  },
  headerRight: {
    position: "absolute",
    right: 18,
    flexDirection: "row",
  },
  helpText: {
    fontSize: 36,
    fontFamily: boldFont,
    color: "#B3965F",
    marginHorizontal: 20,
  },
});
export default Header;
