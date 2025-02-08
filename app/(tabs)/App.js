import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Login from "../../components/Login";

export default function app() { 
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Login />
    </GestureHandlerRootView>
  );
}
