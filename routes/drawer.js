import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import HomeStack from "./homeStack";
import AboutStack from "./aboutStack";

const RootDrawerNavigator = createDrawerNavigator({
  HomeStack: {
    screen: HomeStack,
  },
  AboutStack: {
    screen: AboutStack,
  },
});

export default createAppContainer(RootDrawerNavigator);
