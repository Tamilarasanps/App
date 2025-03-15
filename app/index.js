import React from "react";
import { Platform } from "react-native";
import "../global.css";
import { SafeAreaView, StatusBar } from "react-native";

import BottomBar from "./(component)/(navigator)/BottomBar";

import HomePage from "./(component)/(frontPage)/HomePage";

export default function index() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      {Platform.OS !== "web" && <BottomBar />}
      {Platform.OS === "web" && <HomePage />}
    </SafeAreaView>
  );
}
