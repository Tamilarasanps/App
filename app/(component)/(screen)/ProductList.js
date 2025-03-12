import {
  View,
  Text,
  Pressable,
  Image,
  useWindowDimensions,
  TextInput,
} from "react-native";
import React, { useMemo, useState } from "react";
import Header from "../(header)/Header";
import All from "../(frontPage)/All";
import { ScrollView } from "react-native-gesture-handler";
import GuidePage from "../(frontPage)/GuidePage";
import Footer from "../(frontPage)/Footer";
import { Divider } from "react-native-paper";
import RadioGroup from "react-native-radio-buttons-group";
import Icon from "react-native-vector-icons/Ionicons";
import { router } from "expo-router";

export default function ProductList() {
  const productPage = () => {
    router.push("/(component)/(screen)/SelectProduct");
  };
  const radioButton = useMemo(() => [
    {
      id: 1,
      label: "Price",
    },
    {
      id: 2,
      label: "Negotiable",
    },
  ]);
  const [selectedId, setSelectedId] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const { width } = useWindowDimensions();
  const screen = width > 768;

  return (
    <ScrollView>
      <View className="bg-gray-200">
        <Header />
        <All />
        <View
          className="flex flex-row px-3 rounded-sm "
          style={{ marginTop: -70 }}
        >
          {/* Left Side (Fixed) */}
          <View
            className={`bg-red-500 rounded-sm p-3 mt-5 transition-all duration-300 absolute z-10 ${
              isOpen || screen ? "flex" : "hidden"
            }`}
            style={{
              width: screen ? "20%" : "80%", // For large screens, keep 20%, for small screens, adjust.
              height: "auto",
              position: screen ? "relative" : "absolute",
              top: 0,
              zIndex: 50,
            }}
          >
            {/* Filter Section */}
            <View className="bg-white rounded-sm">
              {isOpen && (
                <Pressable onPress={() => setIsOpen(false)} className="mb-4">
                  <Icon name="close" size={30} color="black" />
                </Pressable>
              )}
              <Text className="text-lg font-semibold p-3 text-red-600">
                Price
              </Text>
              <Divider />
              <Text className="p-3 text-lg font-semibold">From</Text>
              <View className="flex flex-row gap-4 justify-center items-center">
                <TextInput
                  className="border-2 border-gray-300 w-[36%] h-10 rounded-sm px-3"
                  placeholder="From"
                  keyboardType="numeric"
                  maxLength={7}
                />
                <TextInput
                  className="border-2 border-gray-300 w-[36%] h-10 rounded-sm px-3"
                  placeholder="To"
                  keyboardType="numeric"
                  maxLength={7}
                />
              </View>
              <Pressable
                className="mt-4 flex justify-end items-center bg-red-500 w-[70px] rounded-sm p-2  mb-4"
                style={{ height: 30 }}
              >
                <Text className="text-center text-white font-semibold text-sm">
                  Apply
                </Text>
              </Pressable>
              <Divider />
              <Text className="text-lg font-semibold mt-2 px-3">Location</Text>
              <TextInput
                className="border-2 border-gray-300 w-[80%] ms-5 h-10 rounded-sm p-3 mt-3"
                placeholder="Location"
              />
              <Pressable
                className="mt-4 flex justify-end items-center bg-red-500 w-[70px] rounded-sm p-2  mb-4"
                style={{ height: 30 }}
              >
                <Text className="text-center text-white font-semibold text-sm">
                  Apply
                </Text>
              </Pressable>
              <Divider />

              <Text className="font-semibold text-lg p-3">Price Type</Text>
              <View className={`flex flex-row`}>
                <RadioGroup
                  radioButtons={radioButton}
                  onPress={setSelectedId}
                  selectedId={selectedId}
                  layout="row"
                />
              </View>
              <Pressable
                className="mt-4 flex justify-end items-center bg-red-500 w-[70px] rounded-sm p-2  mb-4"
                style={{ height: 30 }}
              >
                <Text className="text-center text-white font-semibold text-sm">
                  Apply
                </Text>
              </Pressable>
              <Divider />

              <Text className="font-semibold text-lg p-3">Brand</Text>
              <TextInput
                className="border-2 border-gray-300 w-[8%] ms-5 h-10 rounded-sm p-3 mt-3 mb-3"
                placeholder="Brand"
              />
              <Pressable
                className="mt-4 flex justify-end items-center bg-red-500 w-[70px] rounded-sm p-2 mb-4"
                style={{ height: 30 }}
              >
                <Text className="text-center text-white font-semibold text-sm">
                  Apply
                </Text>
              </Pressable>
            </View>
          </View>

          {/* Right Side (Scrollable) */}
          <ScrollView
            className={`${
              isOpen ? "w-[80%]" : "w-full"
            } bg-gray-200 mb-4 transition-all`}
          >
            {/* Mobile Menu Icon */}
            {!screen && !isOpen && (
              <Pressable onPress={() => setIsOpen(!isOpen)}>
                <Icon name="filter" size={30} color="black" />
              </Pressable>
            )}

            <View className="flex flex-row mb-5 flex-wrap justify-around gap-2 mt-5">
              {[...Array(12)].map((_, index) => (
                <Pressable onPress={productPage}>
                  <View
                    key={index}
                    className="rounded-md p-3 bg-white border-2 border-gray-300"
                  >
                    <View style={{ position: "relative" }}>
                      <Pressable
                        style={{ position: "absolute", zIndex: 10, right: 10 }}
                      />
                      <Image
                        className="rounded-sm"
                        source={require("../../../assets/machine/printing.jpg")}
                        style={{
                          width: screen ? "250px" : "300px",
                          height: 200,
                        }}
                      />
                      <View className="flex flex-row">
                        <Text className="bg-TealGreen text-white mt-3 w-[80px] h-[27px] flex justify-center items-center rounded-sm">
                          ₹ 100000
                        </Text>
                        <Text className="mt-3 absolute right-3 text-TealGreen font-bold text-lg">
                          Used
                        </Text>
                      </View>
                    </View>
                    <Text className="name text-TealGreen font-semibold mt-2">
                      Cone Vieting
                    </Text>
                    <Text className="year text-gray-600 font-semibold mt-1">
                      2024
                    </Text>
                  </View>
                </Pressable>
              ))}
            </View>
            <View className="flex items-end justify-center w-full my-4">
              <Pressable
                className="bg-blue-600 rounded-sm w-[100px] flex items-center justify-center"
                style={{ height: 30 }}
              >
                <Text className="text-white font-semibold text-sm">
                  Next Page
                </Text>
              </Pressable>
            </View>
          </ScrollView>
        </View>
        <GuidePage />
        <Footer />
      </View>
    </ScrollView>
  );
}
