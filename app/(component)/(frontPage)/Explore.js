import {
  View,
  Text,
  Image,
  useWindowDimensions,
  Pressable,
  ScrollView,
} from "react-native";
import React from "react";

export default function Explore() {
  const { width } = useWindowDimensions();
  const isScreen = width < 600;

  return (
    <View>
      <View className="flex flex-row items-center w-full px-2 mt-4">
        <Text className="text-xl font-bold text-TealGreen">
          Explore Category
        </Text>
        <View className="flex-1" />

        <Pressable onPress={() => alert("See All Clicked")}>
          <Text className="font-bold">See All</Text>
        </Pressable>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View className="flex-row gap-2 justify-center items-center p-5">
          {/* First Image */}
          <View className="bg-red-500 h-[360px] rounded-md">
            <Image
              className="rounded-t-sm"
              style={{ width: 350, height: 250 }}
              source={require("../../../assets/machine/niting.jpg")}
            />
            <Text className="p-2 text-lg text-white">Machine</Text>
            <Text className="p-2 text-lg text-white">Machine</Text>
          </View>

          {/* Second Image */}
          <View className="bg-red-500 h-[360px] rounded-md">
            <Image
              className="rounded-t-sm"
              style={{ width: 350, height: 250 }}
              source={require("../../../assets/machine/fabric.png")}
            />
            <Text className="p-2 text-lg text-white">Machine</Text>
            <Text className="p-2 text-lg text-white">Machine</Text>
          </View>

          {/* Third Image */}
          <View className="bg-red-500 h-[360px] rounded-md">
            <Image
              className="rounded-t-sm"
              style={{ width: 350, height: 250 }}
              source={require("../../../assets/machine/lovepik.jpg")}
            />
            <Text className="p-2 text-lg text-white">Machine</Text>
            <Text className="p-2 text-lg text-white">Machine</Text>
          </View>

          {/* Fourth Image */}
          <View className="bg-red-500 h-[360px] rounded-md">
            <Image
              className="rounded-t-sm"
              style={{ width: 350, height: 250 }}
              source={require("../../../assets/machine/image1.jpg")}
            />
            <Text className="p-2 text-lg text-white">Machine</Text>
            <Text className="p-2 text-lg text-white">Machine</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
