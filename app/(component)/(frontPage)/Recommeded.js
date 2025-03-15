import {
  View,
  Text,
  Image,
  Platform,
  useWindowDimensions,
  Pressable,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { responsiveFontSize } from "react-native-responsive-dimensions";

import Icon from "react-native-vector-icons/FontAwesome";

export default function Recommeded() {
  const [like, setUnlike] = useState(false);
  const width = useWindowDimensions();
  return (
    <View style={{ zIndex: -1 }}>
      <View className=" bg-gray-200 mt-5">
        <View className="flex flex-row items-center w-full px-2 mt-4">
          <Text className="text-xl font-bold text-TealGreen">
            Recommended For You
          </Text>
          <View className="flex-1" />
          <Pressable onPress={() => alert("See All Clicked")}>
            <Text className="font-semibold">See All</Text>
          </Pressable>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View className="flex flex-row  p-4  gap-4 items-center">
            {[...Array(6)].map((_, index) => (
              <View
                className=" rounded-md p-3 bg-white border-2 border-gray-300 "
                key={index}
              >
                <View style={{ position: "relative" }}>
                  <Pressable
                    style={{ position: "absolute", zIndex: 10, right: 10 }}
                    onPress={() => setUnlike(!like)}
                  >
                    <Icon
                      name="heart"
                      size={40}
                      color={like ? "orange" : "white"}
                    />
                  </Pressable>
                  <Image
                    className="rounded-sm"
                    source={require("../../../assets/machine/lovepik.jpg")}
                    style={{ width: 250, height: 200 }}
                  />
                  <View className="flex flex-row items-center">
                    <View className="mt-4 mb-2 p-2 w-[100px] bg-TealGreen rounded-sm justify-center items-center rounded-sm">
                      <Text className="text-white text-lg font-bold">
                        ₹ 100000
                      </Text>
                    </View>
                    <Text className="mt-3 absolute right-3 text-TealGreen font-bold text-lg ">
                      Used
                    </Text>
                  </View>
                </View>
                <View>
                  <Text className="name text-TealGreen font-semibold mt-2 mb-2">
                    Cone Vieting
                  </Text>
                  <Text className="year text-gray-600 font-semibold mt-1">
                    2024
                  </Text>
                </View>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
