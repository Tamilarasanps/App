import { View, Text, TextInput } from "react-native";
import React from "react";
import GuidePage from "../(frontPage)/GuidePage";
import Footer from "../(frontPage)/Footer";
import Recommeded from "../(frontPage)/Recommeded";

export default function ProductDetails() {
  const machineDetails = [
    {
      MachineName: "sweingMachine",
      Model: "OverLock",
      Condition: "Used",
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
      <View style={{ marginLeft: 20 }}>
        {machineDetails.map((value, index) => (
          <View
            key={index}
            style={{
              marginBottom: 20,
              borderRadius: 10,
              padding: 10,
              backgroundColor: "#f8f9fa",
            }}
          >
            {/* Machine Name */}
            <Text className="text-xl font-bold text-blue-600 p-2">
              Machine Name:{" "}
              <Text style={{ fontWeight: "200", color: "#495057" }}>
                {value.MachineName}
              </Text>
            </Text>

            {/* Model */}
            <Text className="text-xl font-bold text-blue-600 p-2">
              Model:{" "}
              <Text style={{ fontWeight: "200", color: "#495057" }}>
                {value.Model}
              </Text>
            </Text>

            {/* Condition */}
            <Text className="text-xl font-bold text-blue-600 p-2">
              Condition:{" "}
              <Text style={{ fontWeight: "200", color: "#495057" }}>
                {value.Condition}
              </Text>
            </Text>

            {/* Functionality */}
            <Text className="text-xl font-bold text-blue-600 p-2">
              Functionality:{" "}
              <Text style={{ fontWeight: "200", color: "#495057" }}>
                {value.Functionality}
              </Text>
            </Text>

            {/* Year of Made */}
            <Text className="text-xl font-bold text-blue-600 p-2">
              Year of Made:{" "}
              <Text style={{ fontWeight: "200", color: "#495057" }}>
                {value.YearOfMade}
              </Text>
            </Text>

            {/* Description */}
            <Text className="text-xl font-bold text-blue-600 p-2">
              Description:
            </Text>
            <TextInput
              placeholder="Description"
              multiline={true}
              numberOfLines={6}
              className="border-2 border-gray-300 w-[80%] ms-12 p-2 rounded-md bg-gray-100"
              style={{ height: 120 }}
              value={value.Description}
            />

            {/* Accessories */}
            <Text className="text-xl font-bold text-blue-600 p-2">
              Accessories:
            </Text>
            <TextInput
              placeholder="Accessories"
              multiline={true}
              numberOfLines={6}
              className="border-2 border-gray-300 w-[80%] ms-12 p-2 rounded-md bg-gray-100"
              style={{ height: 120 }}
              value={value.Accessoires}
            />

            {/* Contact */}
            <Text className="text-xl font-bold text-blue-600 p-2">
              Contact:
            </Text>

            <Text className="text-xl font-bold text-blue-600 p-2">
              Name:{" "}
              <Text style={{ fontWeight: "200", color: "#495057" }}>
                {value.Name}
              </Text>
            </Text>

            <Text className="text-xl font-bold text-blue-600 p-2">
              Phone:{" "}
              <Text style={{ fontWeight: "200", color: "#495057" }}>
                {value.Phone}
              </Text>
            </Text>

            <Text className="text-xl font-bold text-blue-600 p-2">
              E-mail:{" "}
              <Text style={{ fontWeight: "200", color: "#495057" }}>
                {value.Mail}
              </Text>
            </Text>
          </View>
        ))}
      </View>

      <Recommeded />
      <GuidePage />
      <Footer />
    </View>
  );
}
