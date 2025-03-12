import { View, Text, Platform, Image } from "react-native";
import React from "react";
import Header from "../(header)/Header";
import All from "../(frontPage)/All";
import { ScrollView } from "react-native-gesture-handler";
import ProductDetails from "./ProductDetails";

export default function SelectProduct() {
  return (
    <ScrollView>
      <View>
        <Header />
        <All />
        {Platform.OS !== "web" && (
          <View className="" style={{ marginTop: -160 }}>
            <Text className="text-red-500">Sort By</Text>
            <Text>fliter</Text>
          </View>
        )}

            <View>
            <Text
                className="text-xl font-semibold"
                style={{ marginTop: -50, marginLeft: 100 }}
            >
                Sweing Machine{" "}
            </Text>
            <View className="flex flex-row  flex-wrap bg-gray-200">
                <View style={{ width: "35%", marginLeft: 200 }} className="mt-5">
                <Image
                    className="rounded-sm"
                    source={require("../../../assets/machine/fuer.jpg")}
                    style={{ width: "100%", height: 400 }}
                />
                </View>
                <View
                className="mt-10 bg-gray-100 p-5"
                style={{ marginLeft: 50, width: 500 }}
                >
                <Text className="text-2xl font-bold text-TealGreen p-4">
                    Machine Name
                </Text>
                <View className="flex flex-row mt-5 h-5">
                    <Text className="bg-TealGreen text-white font-bold ms-4 w-[100px] rounded-sm flex justify-center items-center  p-4">
                    $10000
                    </Text>
                    <Text
                    className="bg-[#FFD700] font-bold ms-4 w-[100px] rounded-sm flex justify-center items-center  p-4"
                    style={{ backgroundColor: "#FFD700" }}
                    >
                    Negotiable
                    </Text>
                </View>
                <Text className="text-lg font-semibold text-gray-500 p-4 mt-6">
                    Location
                </Text>
                <View className="mt-4 ms-5 w-[100px] bg-TealGreen rounded-sm justify-center items-center">
                    <Text className="text-white text-lg">Chat</Text>
                </View>
                </View>
                <ScrollView horizontal style={{ width: 400 }}>
                <View
                    style={{ width: 80, marginLeft: 200 }}
                    className="mb-12 mt-4 flex flex-row gap-2"
                >
                    <Image
                    className="rounded-sm"
                    source={require("../../../assets/machine/fuer.jpg")}
                    style={{ width: "100%", height: 80 }}
                    />
                    <Image
                    className="rounded-sm"
                    source={require("../../../assets/machine/fuer.jpg")}
                    style={{ width: "100%", height: 80 }}
                    />
                    <Image
                    className="rounded-sm"
                    source={require("../../../assets/machine/fuer.jpg")}
                    style={{ width: "100%", height: 80 }}
                    />
                    <Image
                    className="rounded-sm"
                    source={require("../../../assets/machine/fuer.jpg")}
                    style={{ width: "100%", height: 80 }}
                    />
                    <Image
                    className="rounded-sm"
                    source={require("../../../assets/machine/fuer.jpg")}
                    style={{ width: "100%", height: 80 }}
                    />
                    <Image
                    className="rounded-sm"
                    source={require("../../../assets/machine/fuer.jpg")}
                    style={{ width: "100%", height: 80 }}
                    />
                </View>
                </ScrollView>
            </View>
            </View>

        <ProductDetails />
      </View>
    </ScrollView>
  );
}
