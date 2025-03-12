import { View, Text } from "react-native";
import { FloatingLabelInput } from "react-native-floating-label-input";
import React, { useState } from "react";
import { Pressable } from "react-native";
import Header from "../(header)/Header";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View>
      <Header />

      <View className="flex-1 items-center justify-center bg-gray-100 p-4 row">
        {/* Card Wrapper */}
        <View className="bg-teal-600 w-[40%] p-5 rounded-tl-md rounded-bl-md text-white col">
          <Text className="text-2xl font-bold mt-5 ml-3 text-white shadow-md p-5 ">
            SignUp
            <Text className="mt-4 text-base font-medium ml-3 leading-6">
              Get access to your <Text className="font-semibold">Orders</Text>,{" "}
              <Text className="font-semibold">Wishlist</Text>, and{" "}
              <Text className="font-semibold">Recommendations</Text>.
            </Text>
          </Text>
        </View>
        <View className="bg-white w-96 p-6 rounded-lg shadow-lg col">
          <Text
            className=" text-2xl font-bold text-center mb-4 "
            style={{ color: "#2095A2" }}
          >
            Welcome to Login Page
          </Text>

          {/* Email Input */}
          <View className=" h-[60] w-[90%] mx-auto mt-10">
            <FloatingLabelInput
              label="Username"
              value={username}
              onChangeText={setUsername}
              className="outline-none  border-transparent text-black"
            />
          </View>

          {/* Password Input */}
          <View className="my-3  h-[60] w-[90%] mx-auto mt-4">
            <FloatingLabelInput
              label="Password"
              value={password}
              onChangeText={setPassword}
              className="outline-none border-transparent text-black"
            />
          </View>

          {/* Login Button */}
          <View className="w-full items-center mt-4">
            <Pressable className="bg-[#2095A2] rounded-lg w-80 py-3 items-center">
              <Text className="text-white text-xl font-bold">Login</Text>
            </Pressable>
          </View>

          <View className="flex-1 flex-row justify-around items-center p-4 mt-5">
            <Text className=" text-black">New to GetnGo?</Text>

            <Text
              className="text-red-500 "
              onPress={() => navigation.navigate("SignUp  ")}
            >
              Create An Account
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
