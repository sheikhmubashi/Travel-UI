import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import SecondScreen from "./src/screens/SecondScreen";
import HomeScreen from "./src/screens/HomeScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Screen: SecondScreen
  },
  {
    initialRouteName: "Screen",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
