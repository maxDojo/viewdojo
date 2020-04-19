import React, { useState } from "react";
import { Video } from "expo-av";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import Navigator from "./routes/drawer";

const getFonts = () =>
  Font.loadAsync({
    "nunito-regular": require("./assets/fonts/Nunito-Regular.ttf"),
    "oxygen-regular": require("./assets/fonts/Oxygen-Regular.ttf"),
    "oxygen-light": require("./assets/fonts/Oxygen-Light.ttf"),
    "oxygen-bold": require("./assets/fonts/Oxygen-Bold.ttf"),
    "lobster-regular": require("./assets/fonts/Lobster-Regular.ttf"),
  });

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (fontLoaded === true) {
    return <Navigator />;
  } else {
    return (
      <AppLoading startAsync={getFonts} onFinish={() => setFontLoaded(true)} />
    );
  }
}
