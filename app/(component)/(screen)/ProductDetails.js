import { View, Text, TextInput, Platform } from "react-native";
import React from "react";

export default function ProductDetails() {
  const machineDetails = [
    {
      MachineName: "sweingMachine",
      Model: "OverLock",
      Condition: "Used",
      Location: "Tirupur",
      Functionality: "Stiching",
      YearOfMade: "2002",
      Description: "fjdfkjfsdfdkjdfusdufsudfudfisd",
      Accessoires: "fjdfkjfsdfdkjdfusdufsudfudfisd",
      Name: "Tamil",
      Phone: "999999999",
      Mail: "tamil@gmail.com",
    },
  ];
  return (
    <View>
      <View>
        {machineDetails.map((value, index) => (
          <View
            key={index}
            style={{
              marginBottom: 20,
              padding: Platform.OS === "web" ? 30 : 10,
            }}
          >
            {/* Machine Name */}
            <Text className="text-xl font-bold text-gray-600 p-2">
              Machine Name :{" "}
              <Text
                style={{ color: "#495057", fontWeight: "normal" }}
                className="ms-5 "
              >
                {value.MachineName}
              </Text>
            </Text>

            {/* Model */}
            <Text className="text-xl font-bold text-gray-600 p-2">
              Model :{" "}
              <Text
                style={{ color: "#495057", fontWeight: "normal" }}
                className="ms-5"
              >
                {value.Model}
              </Text>
            </Text>

            {/* Location */}
            <Text className="text-xl font-bold text-gray-600 p-2">
              Location :{" "}
              <Text
                style={{ color: "#495057", fontWeight: "normal" }}
                className="ms-5"
              >
                {value.Location}
              </Text>
            </Text>

            {/* Condition */}
            <Text className="text-xl font-bold text-gray-600 p-2">
              Condition :{" "}
              <Text
                style={{ color: "#495057", fontWeight: "normal" }}
                className="ms-5"
              >
                {value.Condition}
              </Text>
            </Text>

            {/* Functionality */}
            <Text className="text-xl font-bold text-gray-600 p-2">
              Functionality :{" "}
              <Text
                style={{ color: "#495057", fontWeight: "normal" }}
                className="ms-5"
              >
                {value.Functionality}
              </Text>
            </Text>

            {/* Year of Made */}
            <Text className="text-xl font-bold text-gray-600 p-2">
              Year of Made :{" "}
              <Text
                style={{ color: "#495057", fontWeight: "normal" }}
                className="ms-5"
              >
                {value.YearOfMade}
              </Text>
            </Text>

            {/* Description */}
            <Text className="text-xl font-bold text-gray-600 p-2">
              Description :
            </Text>
            <Text style={{ color: "#495057" }} className="ms-5">
              Mini size 2in1 sealer and cutter is handheld and portable, you can
              easily put it in your bag. Useful while traveling. This mini bag
              sealer combines sealer and cutter functions in one machine—both
              heat seal bag and open bag.
            </Text>

            {/* Accessories */}
            <Text className="text-xl font-bold text-gray-600 p-2">
              Accessories :
            </Text>
            <Text style={{ color: "#495057" }} className="ms-5">
              Mini size 2in1 sealer and cutter is handheld and portable, you can
              easily put it in your bag. Useful while traveling. This mini bag
              sealer combines sealer and cutter functions in one machine—both
              heat seal bag and open bag.
            </Text>

            {/* Contact */}
            <Text className="text-xl font-bold text-gray-600 p-2 mt-12">
              Contact:
            </Text>

            {/* Name */}
            <Text className="text-xl font-bold text-gray-600 p-2">
              Name :{" "}
              <Text
                style={{ color: "#495057", fontWeight: "normal" }}
                className="ms-5"
              >
                {value.Name}
              </Text>
            </Text>

            {/* Phone */}
            <Text className="text-xl font-bold text-gray-600 p-2">
              Phone :{" "}
              <Text
                style={{ color: "#495057", fontWeight: "normal" }}
                className="ms-5"
              >
                {value.Phone}
              </Text>
            </Text>

            {/* Email */}
            <Text className="text-xl font-bold text-gray-600 p-2">
              E-mail :{" "}
              <Text
                style={{ color: "#495057", fontWeight: "normal" }}
                className="ms-5"
              >
                {value.Mail}
              </Text>
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
}
