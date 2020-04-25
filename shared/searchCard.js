import React from "react";
import { TouchableOpacity, StyleSheet, Text, View, Image } from "react-native";

export default function SearchCard({ title, details, imgUrl, linker }) {
  return (
    <TouchableOpacity style={styles.main} onPress={linker}>
      <Image style={styles.image} source={{ uri: imgUrl }} />
      <View style={styles.desc}>
        <View style={styles.title}>
          <Text>{title}</Text>
        </View>
        <View style={styles.details}>
          <Text>{details}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  main: { flexDirection: "row", width: "100%" },
  image: { width: 90, height: 120 },
  desc: { flexDirection: "column" },
  title: {},
  details: {},
});
