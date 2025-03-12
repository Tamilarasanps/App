import { View, Text, Image, Platform, useWindowDimensions } from "react-native";
import React, { useState } from "react";
import { responsiveFontSize } from "react-native-responsive-dimensions";
import { Pressable, ScrollView } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome";

export default function Recommeded() {
  const [like, setUnlike] = useState(false);
  const width = useWindowDimensions();
  return (
    <View>
      <View className=" bg-gray-200 mt-5">
        <View className="flex flex-row items-center w-full px-2 mt-4">
          <Text className="text-xl font-bold text-TealGreen">
            Recommended For You
          </Text>
          <View className="flex-1" />{" "}
          <Pressable
            className="font-bold text-red-500 "
            onPress={() => alert("See All Clicked")}
          >
            <Text className="font-semibold">See All</Text>
          </Pressable>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View className="flex flex-row  p-4  gap-4 items-center">
            <View className=" rounded-md p-3 bg-white border-2 border-gray-300 ">
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
                <View className="flex flex-row ">
                  <Text className="bg-TealGreen text-white mt-3 w-[80px] h-[27px]  flex justify-center items-center rounded-sm">
                    ₹ 100000
                  </Text>

                  <Text className="mt-3 absolute right-3 text-TealGreen font-bold text-lg ">
                    Used
                  </Text>
                </View>
              </View>

              <Text className="name text-TealGreen font-semibold mt-2">
                Cone Vieting
              </Text>
              <Text className="year text-gray-600 font-semibold mt-1">
                2024
              </Text>
            </View>
            <View className=" rounded-md p-3 bg-white border-2 border-gray-300 ">
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
                  <Text className="price bg-TealGreen text-white mt-3 w-[80px] h-[27px] text-center flex items-center justify-center rounded-sm">
                    ₹ 100000
                  </Text>
                  <Text className="mt-3 absolute right-3 text-TealGreen font-bold text-lg ">
                    Used
                  </Text>
                </View>
              </View>

              <Text className="name text-TealGreen font-semibold mt-2">
                Cone Vieting
              </Text>
              <Text className="year text-gray-600 font-semibold mt-1">
                2024
              </Text>
            </View>
            <View className=" rounded-md p-3 bg-white border-2 border-gray-300 ">
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
                  <Text className="price bg-TealGreen text-white mt-3 w-[80px] h-[27px] text-center flex items-center justify-center rounded-sm">
                    ₹ 100000
                  </Text>
                  <Text className="mt-3 absolute right-3 text-TealGreen font-bold text-lg ">
                    Used
                  </Text>
                </View>
              </View>

              <Text className="name text-TealGreen font-semibold mt-2">
                Cone Vieting
              </Text>
              <Text className="year text-gray-600 font-semibold mt-1">
                2024
              </Text>
            </View>
            <View className=" rounded-md p-3 bg-white border-2 border-gray-300 ">
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
                  <Text className="price bg-TealGreen text-white mt-3 w-[80px] h-[27px] text-center flex items-center justify-center rounded-sm">
                    ₹ 100000
                  </Text>
                  <Text className="mt-3 absolute right-3 text-TealGreen font-bold text-lg ">
                    Used
                  </Text>
                </View>
              </View>

              <Text className="name text-TealGreen font-semibold mt-2">
                Cone Vieting
              </Text>
              <Text className="year text-gray-600 font-semibold mt-1">
                2024
              </Text>
            </View>
            <View className=" rounded-md p-3 bg-white border-2 border-gray-300 ">
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
                  <Text className="price bg-TealGreen text-white mt-3 w-[80px] h-[27px] text-center flex items-center justify-center rounded-sm">
                    ₹ 100000
                  </Text>
                  <Text className="mt-3 absolute right-3 text-TealGreen font-bold text-lg ">
                    Used
                  </Text>
                </View>
              </View>

              <Text className="name text-TealGreen font-semibold mt-2">
                Cone Vieting
              </Text>
              <Text className="year text-gray-600 font-semibold mt-1">
                2024
              </Text>
            </View>
            <View className=" rounded-md p-3 bg-white border-2 border-gray-300 ">
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
                  <Text className="price bg-TealGreen text-white mt-3 w-[80px] h-[27px] text-center flex items-center justify-center rounded-sm">
                    ₹ 100000
                  </Text>
                  <Text className="mt-3 absolute right-3 text-TealGreen font-bold text-lg ">
                    Used
                  </Text>
                </View>
              </View>

              <Text className="name text-TealGreen font-semibold mt-2">
                Cone Vieting
              </Text>
              <Text className="year text-gray-600 font-semibold mt-1">
                2024
              </Text>
            </View>
            <View className=" rounded-md p-3 bg-white border-2 border-gray-300 ">
              <View style={{ position: "relative" }}>
                <Pressable
                  style={{ position: "absolute", zIndex: 1, right: 1 }}
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
                  <Text className="price bg-TealGreen text-white mt-3 w-[80px] h-[27px] text-center flex items-center justify-center rounded-sm">
                    ₹ 100000
                  </Text>
                  <Text className="mt-3 absolute right-3 text-TealGreen font-bold text-lg ">
                    Used
                  </Text>
                </View>
              </View>

              <Text className="name text-TealGreen font-semibold mt-2">
                Cone Vieting
              </Text>
              <Text className="year text-gray-600 font-semibold mt-1">
                2024
              </Text>
            </View>
            <View className=" rounded-md p-3 bg-white border-2 border-gray-300 ">
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
                  <Text className="price bg-TealGreen text-white mt-3 w-[80px] h-[27px] text-center flex items-center justify-center rounded-sm">
                    ₹ 100000
                  </Text>
                  <Text className="mt-3 absolute right-3 text-TealGreen font-bold text-lg ">
                    Used
                  </Text>
                </View>
              </View>

              <Text className="name text-TealGreen font-semibold mt-2">
                Cone Vieting
              </Text>
              <Text className="year text-gray-600 font-semibold mt-1">
                2024
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
