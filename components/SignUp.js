import React, { useState, useRef } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { FloatingLabelInput } from "react-native-floating-label-input";

const SignUp = ({ navigation }) => {
  const [mobileOrEmail, setMobileOrEmail] = useState("");
  const [username, setUsername] = useState("");
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [otpSent, setOtpSent] = useState(false);
  const inputs = useRef([]);

  const handleChange = (text, index) => {
    let newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    // Move to next input automatically
    if (text && index < 3) {
      inputs.current[index + 1].focus();
    }
  };

  const handleBackspace = (text, index) => {
    if (!text && index > 0) {
      inputs.current[index - 1].focus();
    }
  };

  return (
    <View className="h-screen w-screen align-items-center">
      <Text className="text-2xl mb-8 mx-auto text-TealGreen mt-16">
        Create Your Account
      </Text>

      {/* Username Input */}
      <View className="bg-white h-[60] w-[90%] mx-auto mt-10">
        <FloatingLabelInput
          label="Username"
          value={username}
          onChangeText={setUsername}
        />
      </View>

      {/* Mobile or Email Input */}
      <View className="bg-white h-[60] w-[90%] mx-auto mt-10">
        <FloatingLabelInput
          label="Mobile or E-mail"
          value={mobileOrEmail}
          onChangeText={setMobileOrEmail}
        />
      </View>

      {/* Send OTP Button */}
      <TouchableOpacity
        className="bg-TealGreen py-4 px-4 mt-10 w-24 mx-auto rounded-md"
        onPress={() => setOtpSent(true)}
      >
        <Text className="text-white m-auto">Send OTP</Text>
      </TouchableOpacity>

      {/* OTP Input Section */}
      {otpSent && (
        <View className="align-items-center mt-8">
          <Text className="text-lg">Enter OTP</Text>
          <View className="flex-row space-x-4 mt-4">
            {otp.map((digit, index) => (
              <TextInput
                key={index}
                ref={(el) => (inputs.current[index] = el)}
                className="w-12 h-12 text-center border-2 border-gray-300 rounded-md text-xl text-black"
                keyboardType="numeric"
                maxLength={1}
                value={digit}
                onChangeText={(text) => handleChange(text, index)}
                onKeyPress={({ nativeEvent }) =>
                  nativeEvent.key === "Backspace"
                    ? handleBackspace("", index)
                    : null
                }
              />
            ))}
          </View>

          {/* Verify OTP Button */}
          <TouchableOpacity className="bg-blue-900 rounded-sm mt-4 w-24 py-2">
            <Text className="text-white text-center">Verify OTP</Text>
          </TouchableOpacity>

          {/* Resend OTP */}
          <TouchableOpacity className="mt-4">
            <Text className="text-blue-500">Resend OTP</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Already have an account? */}
      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text className="mt-8 mb-8 mx-auto text-red-500">
          Already have an account? Log In
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUp;
