import React, { useState } from "react";
import { useRouter } from "expo-router";
import { Link } from "expo-router";
import { KeyboardAvoidingView } from "react-native";

import { View, Text, Pressable, TextInput, Platform } from "react-native";
import { FloatingLabelInput } from "react-native-floating-label-input";
import Header from "../(header)/Header";

const Password = () => {
  const [password, setPassword] = useState("");
  const [confirmpass, setConfirmPass] = useState("");

  const formSubmit = () => {
    console.log("Form Submitted");
  };

  return (
    <>
      <Header />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="flex-1 bg-gray-200 justify-center items-center"
      >
        <View className="w-screen justify-center align-items-center bg-gray-200">
          <View
            className={`bg-white ${
              Platform.OS === "web"
                ? "w-[50%] flex flex-row"
                : "w-[90%] flex flex-col gap-6 "
            } mx-auto shadow-[5] rounded-md`}
          >
            {Platform.OS === "web" && (
              <View className="bg-teal-600 w-[40%] p-5 rounded-tl-md rounded-bl-md text-white">
                <Text className="text-2xl font-bold mt-5 ml-3 text-white shadow-md p-5 ">
                  Sign
                  <Text className="mt-4 text-base font-medium ml-3 leading-6">
                    <br />
                    Get access to your{" "}
                    <Text className="font-semibold">Orders</Text>,{" "}
                    <Text className="font-semibold">Wishlist</Text>, and{" "}
                    <Text className="font-semibold">Recommendations</Text>.
                  </Text>
                </Text>
              </View>
            )}
            <View
              className={`${
                Platform.OS === "web" ? "w-[60%]" : "w-full mx-auto"
              } p-5 py-8`}
            >
              <Text className="text-2xl font-bold mx-auto text-TealGreen mb-10">
                Create Your Password
              </Text>

              {/* Password Input */}
              <View
                className={`bg-white h-[50] ${
                  Platform.OS === "web" ? "w-[75%]" : "w-[90%]"
                } mx-auto`}
              >
                <FloatingLabelInput
                  label="Password"
                  value={password}
                  staticLabel
                  hintTextColor={"#aaa"}
                  containerStyles={{
                    borderWidth: 2,
                    paddingHorizontal: 10,
                    backgroundColor: "#fff",
                    borderColor: "#2095A2",
                    borderRadius: 8,
                  }}
                  customLabelStyles={{
                    leftFocused: 10,
                    colorFocused: "#5C6670",
                    fontSizeFocused: 16,
                  }}
                  labelStyles={{
                    backgroundColor: "#fff",
                    paddingHorizontal: 5,
                  }}
                  inputStyles={{
                    borderWidth: 0,
                    outline: "none",
                    color: "#5C6670",
                    paddingHorizontal: 10,
                  }}
                  onChangeText={setPassword}
                />
              </View>

              {/* Confirm Password Input */}
              <View
                className={`bg-white h-[50] ${
                  Platform.OS === "web" ? "w-[75%]" : "w-[90%]"
                } mx-auto mt-6`}
              >
                <FloatingLabelInput
                  label="Confirm Password"
                  value={confirmpass}
                  staticLabel
                  hintTextColor={"#aaa"}
                  containerStyles={{
                    borderWidth: 2,
                    paddingHorizontal: 10,
                    backgroundColor: "#fff",
                    borderColor: "#2095A2",
                    borderRadius: 8,
                  }}
                  customLabelStyles={{
                    leftFocused: 10,
                    colorFocused: "#5C6670",
                    fontSizeFocused: 12,
                  }}
                  labelStyles={{
                    backgroundColor: "#fff",
                    paddingHorizontal: 5,
                  }}
                  inputStyles={{
                    outline: "none",
                    color: "#5C6670",
                    paddingHorizontal: 10,
                    paddingVertical: 10,
                  }}
                  onChangeText={setConfirmPass}
                />
              </View>

              {/* Submit Button */}
              <Pressable
                onPress={formSubmit}
                className="bg-TealGreen mb-8 py-4 px-4 h-max mt-10 w-24 mx-auto rounded-md"
              >
                <Text className="text-white m-auto">Register</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </>
  );
};

export default Password;
