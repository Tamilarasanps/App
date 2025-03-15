import { View, Text, Pressable } from "react-native";
import React from "react";
import MObileHeader from "../(mobileHeader)/MobileHeader";
import { router } from "expo-router";
export default function UserCategory() {
const subCategory=()=>{
  router.push('/(component)/(userCategory)/UserSubCategory')
}
  return (
    <View>
      <MObileHeader />
      <View className="flex items-center">
        <Pressable
          className="mt-3 bg-red-600 w-[90%] h-[40] rounded-md flex items-center justify-center"
          onPress={subCategory}
        >
          <Text className="font-semibold text-xl text-white">
            Spinning Machines
          </Text>
        </Pressable>
        <Pressable className="mt-3 bg-red-600 w-[90%] h-[40] rounded-md flex items-center justify-center">
          <Text className="font-semibold text-xl text-white">
            Weaving Machines
          </Text>
        </Pressable>
        <Pressable className="mt-3 bg-red-600 w-[90%] h-[40] rounded-md flex items-center justify-center">
          <Text className="font-semibold text-xl text-white">
            Knitting Machines
          </Text>
        </Pressable>
        <Pressable className="mt-3 bg-red-600 w-[90%] h-[40] rounded-md flex items-center justify-center">
          <Text className="font-semibold text-xl text-white">
            Textile Dyeing Machines
          </Text>
        </Pressable>
        <Pressable className="mt-3 bg-red-600 w-[90%] h-[40] rounded-md flex items-center justify-center">
          <Text className="font-semibold text-xl text-white">
            Textile Printing Machines
          </Text>
        </Pressable>
        <Pressable className="mt-3 bg-red-600 w-[90%] h-[40] rounded-md flex items-center justify-center">
          <Text className="font-semibold text-xl text-white">
            Finishing Machines
          </Text>
        </Pressable>
        <Pressable className="mt-3 bg-red-600 w-[90%] h-[40] rounded-md flex items-center justify-center">
          <Text className="font-semibold text-xl text-white">
            Nonwoven Machines
          </Text>
        </Pressable>
        <Pressable className="mt-3 bg-red-600 w-[90%] h-[40] rounded-md flex items-center justify-center">
          <Text className="font-semibold text-xl text-white">
            Textile Testing Machines
          </Text>
        </Pressable>
        <Pressable className="mt-3 bg-red-600 w-[90%] h-[40] rounded-md flex items-center justify-center">
          <Text className="font-semibold text-xl text-white">
            Textile Reprocessing Machines
          </Text>
        </Pressable>
        <Pressable className="mt-3 bg-red-600 w-[90%] h-[40] rounded-md flex items-center justify-center">
          <Text className="font-semibold text-xl text-white">
            Embroidery Machines
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
