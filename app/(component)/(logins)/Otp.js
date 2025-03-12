import axios from "axios";
import React, { useState, useRef } from "react";
import { useSearchParams } from "expo-router/build/hooks";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

const Otp = () => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputs = useRef([]);
  const router = useRouter();
  const { mailOrphone } = useSearchParams();

  const sendOtp = async () => {
    console.log(otp, "mail");
    console.log("running");
    try {
      const response = await axios.post(
        "http://192.168.1.11:4000/signup/otpcheck",
        {
          mailOrphone,
          otp,
        }
      );

      if (response.status === 200) {
        console.log(response.data.Email);
        // Adjust based on response structure
        const email = response.data?.data?.Email;
        console.log(email, "success");
        router.push("/(component)/(profile)/Profile");
      } else {
        throw new Error("Failed to verify OTP");
      }
    } catch (error) {
      console.error("rejection", error.response?.data || error.message);
    }
  };

  const handleChange = (text, index) => {
    if (!/^\d*$/.test(text)) return; // Allow only numbers

    let newOtp = [...otp];
    newOtp[index] = text.substring(text.length - 1); // Only keep the last digit
    setOtp(newOtp);

    // Move to next input if a digit is entered and it's not the last box
    if (text && index < otp.length - 1) {
      inputs.current[index + 1]?.focus();
    }
  };

  const handleBackspace = (text, index) => {
    let newOtp = [...otp];

    if (!text && index > 0) {
      newOtp[index] = ""; // Clear current box
      setOtp(newOtp);
      inputs.current[index - 1]?.focus(); // Move focus back
    } else {
      newOtp[index] = ""; // Allow deleting in the first box
      setOtp(newOtp);
    }
  };

  return (
    <View className="flex flex-col gap-8 align-items-center mt-8">
      <Text className="text-lg mx-auto">Enter OTP</Text>

      {/* OTP Input Boxes */}
      <View className="flex-row gap-4 mt-4 mx-auto">
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            ref={(el) => (inputs.current[index] = el)}
            className="w-12 h-12 text-center border-2 border-gray-300 rounded-md text-xl text-black"
            keyboardType="numeric"
            maxLength={1}
            value={digit}
            onChangeText={(text) => handleChange(text, index)}
            onKeyPress={({ nativeEvent }) => {
              if (nativeEvent.key === "Backspace") {
                handleBackspace(digit, index);
              }
            }}
          />
        ))}
      </View>

      {/* Verify OTP Button */}
      <TouchableOpacity
        onPress={sendOtp}
        className="bg-TealGreen  rounded-sm mt-4 w-24 py-2 mx-auto"
      >
        <Text className="text-white text-center">Verify OTP</Text>
      </TouchableOpacity>

      {/* Resend OTP */}
      <TouchableOpacity className="mt-4 mx-auto">
        <Text className="text-blue-500 mx-auto">Resend OTP</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Otp;
