import React, { useState } from "react";
import { View, Text, Pressable } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <View className="flex-1 items-center justify-center bg-gray-100">
      {/* ======= Menu Icon (Visible Only on Mobile) ======= */}
      <Pressable onPress={() => setIsOpen(!isOpen)} className="md:hidden">
        <Icon name="menu" size={30} color="black" />
      </Pressable>

      {/* ======= Content Section ======= */}
      <View
        className={`w-[90%] h-[40px] rounded-md flex items-center justify-center 
        ${isOpen ? "flex" : "hidden"} md:flex bg-red-600 mt-3`}
      >
        <Text className="font-semibold text-xl text-white">
          Embroidery Machines
        </Text>
      </View>
    </View>
  );
}
