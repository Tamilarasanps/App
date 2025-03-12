import {
  View,
  Text,
  Image,
  Platform,
  useWindowDimensions,
  StyleSheet,
} from "react-native";
import React from "react";
import { responsiveFontSize } from "react-native-responsive-dimensions";
import { Pressable, ScrollView } from "react-native-gesture-handler";

export default function Explore() {
  // Get screen dimensions
  const { width } = useWindowDimensions();
  const isScreen = width < 600; // Condition for smaller screens (mobile)

  return (
    <View className="">
      <View className="flex flex-row items-center w-full px-2 mt-4">
        <Text className="text-xl font-bold text-TealGreen">
          Explore Category
        </Text>
        <View className="flex-1" />{" "}
        <Pressable
          className="font-bold text-red-500 "
          onPress={() => alert("See All Clicked")}
        >
          <Text className="font-semibold">See All</Text>
        </Pressable>
      </View>

      {/* Responsive Layout: Column for smaller screens, Row for larger screens */}

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View className=" flex-row gap-2  justify-center items-center p-5">
          {/* First Image */}
          <View className="bg-red-500 h-[360px] rounded-md">
            <Image
              className="rounded-t-sm"
              style={{ width: 350, height: 250 }}
              source={require("../../../assets/machine/niting.jpg")}
            />
            <Text className=" p-2 text-lg text-white">Machine</Text>
            <Text className=" p-2 text-lg text-white">Machine</Text>
          </View>

          {/* Second Image */}
          <View className="bg-red-500 h-[360px] rounded-md">
            <Image
              className="rounded-t-sm"
              style={{ width: 350, height: 250 }}
              source={require("../../../assets/machine/fabric.png")}
            />
            <Text className=" p-2 text-lg text-white">Machine</Text>
            <Text className=" p-2 text-lg text-white">Machine</Text>
          </View>
          {/* 3 */}
          <View className="bg-red-500 h-[360px] rounded-md">
            <Image
              className="rounded-t-sm"
              style={{ width: 350, height: 250 }}
              source={require("../../../assets/machine/lovepik.jpg")}
            />
            <Text className=" p-2 text-lg text-white">Machine</Text>
            <Text className=" p-2 text-lg text-white">Machine</Text>
          </View>
          {/* 4 */}
          <View className="bg-red-500 h-[360px] rounded-md">
            <Image
              className="rounded-t-sm"
              style={{ width: 350, height: 250 }}
              source={require("../../../assets/machine/image1.jpg")}
            />
            <Text className=" p-2 text-lg text-white">Machine</Text>
            <Text className=" p-2 text-lg text-white">Machine</Text>
          </View>
        </View>
        {/* <View className="flex-1 flex-row justify-center items-center space-x-4">
          
            <View className="bg-red-500 h-[450px]">
              <Image
                style={{ width: 400, height: 300 }}
                source={require("../../../assets/machine/niting.jpg")}
              />
              <Text className=" p-2 text-lg text-white">Machine</Text>
              <Text className=" p-2 text-lg text-white">Machine</Text>
            </View>

       
            <View className="bg-red-500 h-[450px]">
              <Image
                style={{ width: 400, height: 300 }}
                source={require("../../../assets/machine/niting.jpg")}
              />
              <Text className=" p-2 text-lg text-white">Machine</Text>
              <Text className=" p-2 text-lg text-white">Machine</Text>
            </View>
          </View> */}
      </ScrollView>
    </View>
  );
}
