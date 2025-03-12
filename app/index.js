// // App.js or index.js
// import React from "react";
// import "../global.css";
// import { PaperProvider } from "react-native-paper";
// import { GestureHandlerRootView } from "react-native-gesture-handler";
// import BottomBar from "./(component)/(navigator)/BottomBar";
// import All from "./(component)/(frontPage)/All";
// import { View, Text } from "react-native";

// export default function App() {
//   return (
//     <View>
//       <GestureHandlerRootView style={{ flex: 1 }}>
//         <PaperProvider>
//           <Text> root file</Text>
//           {/* <All /> */}
//           {/* <BottomBar /> */}
//         </PaperProvider>
//       </GestureHandlerRootView>
//     </View>
//   );
// }

import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { View, Text, Platform } from "react-native";
import "../global.css";
import { SafeAreaView, StatusBar } from "react-native";
import AppNavigation from "./(component)/navigator/AppNavigation";
import BottomBar from "./(component)/(navigator)/BottomBar";
import Header from "./(component)/(header)/Header";
import { PaperProvider } from "react-native-paper";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import HomePage from "./(component)/(frontPage)/HomePage";

export default function index() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />

      <GestureHandlerRootView>
        {Platform.OS !== "web" && <BottomBar />}
        {Platform.OS === "web" && <HomePage />}
        {/* <HomePage /> */}
      </GestureHandlerRootView>
    </SafeAreaView>
  );
}
