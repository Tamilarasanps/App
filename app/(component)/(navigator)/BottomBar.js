import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome";

import Profile from "../(profile)/Profile";
import HomePage from "../(frontPage)/HomePage";
import { Platform } from "react-native";
import Sell from "../(sell)/Sell";
import Fav from "../(screen)/Fav";
import CategoryStack from "./CategoryStack";

const Tab = createBottomTabNavigator();

function BottomBar() {
  if (Platform.OS === "web") {
    return null;
  }
  return (
    <Tab.Navigator
      initialRouteName="HomePage"
      screenOptions={{
        headerShown: false,
        // tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "white",
          borderRadius: 10,
          height: 60,
        },

        tabBarActiveTintColor: "teal",
        tabBarInactiveTintColor: "grey",
      }}
    >
      <Tab.Screen
        name="HomePage"
        component={HomePage}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="home" color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="Category"
        component={CategoryStack}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="cogs" color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="Sell"
        component={Sell}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="plus" color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="fav"
        component={Fav}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="star" color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="user" color={color} size={30} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomBar;
