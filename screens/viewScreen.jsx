import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
// import { Video } from "expo-av";
// import VideoPlayer from "expo-video-player";
import { YouTubeStandaloneAndroid } from "react-native-youtube";

// extract video source from nav

// const videoProps = {
//   source: {
//     uri:
//       // "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
//       "https://youtube.com/watch/v='okf-RTmPtdw'",
//   },
//   inFullScreen: false,
//   width: width * 0.85,
//   height: (width * 0.85 * 9) / 16,
// };

const ViewScreen = ({ navigation }) => {
  YouTubeStandaloneAndroid.playVideo({
    apiKey: "AIzaSyArzqyR-7NGb9aXX7A5tzFOUr4gTof4oQA",
    videoId: navigation.getParam("id"),
    autoplay: false,
    startTime: 10,
  });
  return (
    // Initialize video player window
    // <VideoPlayer
    //   videoProps={videoProps}
    //   hideControlsTimerDuration={4000}
    //   showControlsOnLoad={true}
    //   showFullscreenButton={true}
    //   sliderColor="#4D250A"
    //   textStyle={styles.playerText}
    // />
    // <Text>{navigation.getParam("id")}</Text>
    <Youtube
      apiKey="AIzaSyArzqyR-7NGb9aXX7A5tzFOUr4gTof4oQA"
      videoId={navigation.getParam("id")}
      play={false}
      fullscreen={false}
      loop={false}
      style={{ alignSelf: "stretch", height: 300 }}
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
