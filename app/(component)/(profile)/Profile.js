import { View, Text, Pressable } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/MaterialIcons";
import Header from "../(header)/Header";
import All from "../(frontPage)/All";
import Footer from "../(frontPage)/Footer";
import { router } from "expo-router";
import { ScrollView } from "react-native-gesture-handler";

export default function Profile() {
  const signUp = () => {
    router.push("/(component)/(logins)/SignUp");
  };
  return (
    <ScrollView>
      <View>
        <Header />
        <All />
        <View className="flex-1 items-center h-[500px] " style={{ zIndex: -1 }}>
          <View className="items-center mt-5">
            {/* <Text className="text-xl font-bold">Account</Text> */}
          </View>
          <View className="items-center mt-10">
            <View
              className="bg-red-100 items-center justify-center"
              style={{
                width: 100,
                height: 100,
                borderRadius: 50,
              }}
            >
              <Icon name="person" size={80} color="black" />
            </View>
          </View>
          <Text className="mt-5 font-bold text-xl">Tamilarasan</Text>
          <Text className="mt-5  text-xl">Member since in march 2025</Text>

          <Text className="text-lg font-semibold text-gray-700 mt-5">
            New user?{" "}
            <Pressable onPress={signUp}>
              <Text className="text-blue-500 font-bold">Sign Up</Text>
            </Pressable>
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
