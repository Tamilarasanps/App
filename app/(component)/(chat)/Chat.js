import React from "react";
import { View, Text } from "react-native";
import Header from "../(header)/Header";

const App = () => {
  return (
    <View>
      <Header />
      <View className="shadow-lg bg-white p-4 mt-24 rounded-lg">
        <Text>This box has a shadow!</Text>
      </View>
    </View>
  );
};

export default App;
