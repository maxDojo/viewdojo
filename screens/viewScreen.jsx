import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Video } from "expo-av";
import VideoPlayer from "expo-video-player";
import { globalStyles, width } from "../styles/global";

const videoProps = {
  source: {
    uri:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  },
  inFullScreen: false,
  width: width * 0.85,
  height: (width * 0.85 * 9) / 16,
};

const ViewScreen = () => {
  return (
    <VideoPlayer
      videoProps={videoProps}
      hideControlsTimerDuration={4000}
      showControlsOnLoad={true}
      showFullscreenButton={true}
      sliderColor="#4D250A"
      textStyle={styles.playerText}
    />
  );
};

const styles = StyleSheet.create({
  videoContainer: {
    width: 292,
    height: 243,
    backgroundColor: "black",
  },
  playerText: {
    fontFamily: "lobster-regular",
    color: "#E5DC8B",
  },
});
export default ViewScreen;
