import React from "react";
import { View, Text, StatusBar } from "react-native";
import Routes from "./src/navigation/navigationStack";
import FlashMessage from "react-native-flash-message";
const App = () => {





  return (
    <>
      <StatusBar translucent
        backgroundColor={'#2B9330'}
        barStyle={"light-content"}
      />
      <FlashMessage position={"top"} />
      <Routes />

    </>
  );
}
export default App;