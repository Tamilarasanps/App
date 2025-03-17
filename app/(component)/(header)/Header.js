import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  useWindowDimensions,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Divider } from "react-native-paper";
import FontAwesome from "react-native-vector-icons/FontAwesome";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { width } = useWindowDimensions();
  const screen = width > 786; // Check if the screen is wide enough for desktop layout

  const sell = () => router.push("/(component)/(sell)/Sell");
  const chat = () => router.push("/(component)/(chat)/Chat");
  const profile = () => router.push("/(component)/(profile)/Profile");
  const fav = () => router.push("/(component)/(screen)/Fav");
  const [searchBar, setSearchBar] = useState("");

  return (
    <View
      className="bg-TealGreen w-full z-10 px-4 py-3"
      style={{ position: "sticky", top: 0 }}
    >
      <View className="flex flex-row items-center justify-between">
        <Text className="text-white text-lg font-bold md:text-2xl">
          Machine Street
        </Text>

        {/* Search Bar + Menu Icon */}
        <View className="md:w-[50%] w-[60%] flex-row items-center">
          <TextInput
            className="bg-white h-10  rounded-md px-3 py-2 text-gray-800 flex-1"
            placeholder="Search..."
            value={searchBar}
            onChangeText={setSearchBar}
          />
          {!screen && (
            <Pressable className="ms-2" onPress={() => setIsOpen(!isOpen)}>
              <MaterialIcons name="menu" size={50} color="white" />
            </Pressable>
          )}
        </View>
        {screen ? (
          <View className="flex flex-row gap-6 space-x-4">
            <Pressable
              onPress={sell}
              className="bg-red-500 py-2 px-6 rounded-md h-10  md:60"
              style={{ width: 150 }}
            >
              <Text className="text-white text-center text-lg font-semibold ">
                Sell
              </Text>
            </Pressable>
            <Pressable onPress={fav}>
              <View className="ms-4">
                <FontAwesome name="star" size={20} color="white" />
              </View>
              <Text className="text-white text-center text-md font-semibold">
                WishList
              </Text>
            </Pressable>
            <Pressable onPress={chat}>
              <MaterialIcons name="chat" size={40} color="white" />
            </Pressable>

            <Pressable onPress={profile}>
              <MaterialIcons name="account-circle" size={40} color="white" />
            </Pressable>
          </View>
        ) : (
          <View
            className={`absolute right-0 top-[60px] bg-white w-[250px] p-2 rounded-sm shadow-lg ${
              isOpen ? "flex" : "hidden"
            }`}
          >
            <Pressable onPress={fav}>
              <View className="flex flex-row items-center space-x-4 p-4 bg-gray-100 rounded-sm mb-2 ">
                <FontAwesome name="star" size={20} color="teal" />
                <Text className="text-gray-500 font-semibold text-lg">
                  WishList
                </Text>
              </View>
            </Pressable>
            <Pressable
              onPress={chat}
              className="flex flex-row items-center space-x-4 p-4 bg-gray-100 rounded-sm mb-2"
            >
              <MaterialIcons name="chat" size={30} color="teal" />
              <Text className="text-gray-500 font-semibold text-lg">
                Message
              </Text>
            </Pressable>

            <Pressable
              onPress={profile}
              className="flex flex-row items-center space-x-3 p-4 bg-gray-100 rounded-sm mb-2"
            >
              <MaterialIcons name="account-circle" size={40} color="teal" />
              <Text className="text-gray-500 font-semibold text-lg">
                Profile
              </Text>
            </Pressable>

            <Divider />

            <Pressable
              onPress={sell}
              className="bg-red-500 py-2 px-6 rounded-md mb-2"
            >
              <Text className="text-white text-center text-lg font-semibold">
                Sell
              </Text>
            </Pressable>
          </View>
        )}
      </View>
    </View>
  );
}
