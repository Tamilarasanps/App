import React from "react";
// import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomePage from "../(frontPage)/HomePage";
import AdminCategory from "../(admin)/AdminCategory";

const Drawer = createDrawerNavigator();

export default function AppNavigation() {
  return (
    <Drawer.Navigator initialRouteName="Categorypage">
      <Drawer.Screen name="Main" component={HomePage} />
      <Drawer.Screen name="AdminCategory" component={AdminCategory} />
      {/* <Drawer.Screen name="Home" component={BottomBar} /> */}
    </Drawer.Navigator>
  );
}
