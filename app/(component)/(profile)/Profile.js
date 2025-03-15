import { View, Text } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/MaterialIcons";

export default function Profile() {
  return (
    <View className="flex-1 items-center ">
      <View className="items-center mt-5">
        <Text className="text-xl font-bold">Account</Text>
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
    </View>
  );
}
