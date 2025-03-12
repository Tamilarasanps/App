import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import All from "../(frontPage)/All";
import Icon from "react-native-vector-icons/FontAwesome";
import Recommeded from "../(frontPage)/Recommeded";
import Login from "../(logins)/Login";
import Profile from "../(profile)/Profile";
import HomePage from "../(frontPage)/HomePage";
import { Platform } from "react-native";
import UserCategory from "../(userCategory)/UserCategory";
import Sell from "../(sell)/Sell";

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
        component={UserCategory}
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
        component={Login}
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
