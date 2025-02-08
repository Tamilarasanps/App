import { View, Text, SafeAreaView } from "react-native";
import { FloatingLabelInput } from "react-native-floating-label-input";
import SignUp from "@/components/SignUp";
import Login from "@/components/Login";
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TouchableOpacity } from "react-native";
import "../../global.css";

export default function IndexScr({ navigation }) {
  const [mailnum, setMailNum] = useState("");
  const [password, setPassword] = useState("");
  const stack = createNativeStackNavigator();
  return (
    <View className="flex-1 items-center justify-center bg-gray-100 p-4">
      {/* <Login /> */}
      <SignUp />
    </View>
    // <NavigationContainer>
    //   <stack.Navigator>
    //     <stack.Screen name="Signup" component={SignUp}></stack.Screen>
    //   </stack.Navigator>
    // </NavigationContainer>
  );
}
