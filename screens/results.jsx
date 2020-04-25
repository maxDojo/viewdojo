import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, FlatList, Text } from "react-native";
import SearchCard from "../shared/searchCard";
import Axios from "axios";

const goToViewScreen = (videoId) => {
  navigation.navigate("View");
};
export default function Result({ navigation }) {
  const [youtubeRes, setYoutubeRes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    Axios.get("https://www.googleapis.com/youtube/v3/search", {
      params: {
        // q: navigation.getParam("query"),
        q: "clash with eric",
        key: "AIzaSyArzqyR-7NGb9aXX7A5tzFOUr4gTof4oQA",
        part: "snippet",
        maxResults: 20,
      },
    })
      .then((res) => {
        setYoutubeRes(res.data);
      })
      .then(() => setIsLoading(false))
      .catch((err) => {
        console.log(err);
        setYoutubeRes("No Result");
      });
  }, []);
  if (isLoading) {
    return <View></View>;
  }
  const selectVideo = (id, type) => {
    navigation.navigate("View", { id: id, type: type });
  };
  return (
    <View>
      <FlatList
        data={youtubeRes.items}
        keyExtractor={(item) => item.etag}
        renderItem={({ item }) => (
          <View>
            <SearchCard
              title={item.snippet.title}
              imgUrl={item.snippet.thumbnails.default.url}
              details={item.snippet.channelTitle + item.id.kind}
              linker={() => {
                if (item.id.kind == "youtube#video")
                  selectVideo(item.id.videoId, "video");
                else if (item.id.kind == "youtube#channel")
                  selectVideo(item.id.channelId, channel);
              }}
            />
          </View>
        )}
      />
    </View>
  );
}
