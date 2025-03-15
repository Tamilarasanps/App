import {
  View,
  Text,
  Image,
  useWindowDimensions,
  Pressable,
  ScrollView
} from "react-native";
import React, { useState } from "react";
import All from "../(frontPage)/All";
import Header from "../(header)/Header";
import Footer from "../(frontPage)/Footer";
import Icon from "react-native-vector-icons/Ionicons";
import { router } from "expo-router";
import GuidePage from "../(frontPage)/GuidePage";

export default function CategoryList() {
  const { width } = useWindowDimensions();
  const isScreen = width > 768;
  const [isOpen, setIsOpen] = useState(false);

  const productPage = () => {
    router.push("/(component)/(screen)/ProductList");
  };

  return (
    <ScrollView>
      <View>
        <Header />
        <All />

        <View
          className="flex flex-row w-full relative flex items-center justify-center mt-5"
          style={{ zIndex: -1,  }}
        >
          <View
            className={`bg-gray-200 transition-all duration-300 absolute  ${
              isOpen || isScreen ? "flex" : "hidden"
            }`}
            style={{
              width: isScreen ? "30%" : "90%",
              height: "100%",
              position: isScreen ? "relative" : "absolute",
              top: 0,
            }}
          >
            <View className="flex items-center mt-4">
              {!isScreen && (
                <Pressable onPress={() => setIsOpen(false)} className="mb-4">
                  <Icon name="close" size={30} color="black" />
                </Pressable>
              )}
              {[
                "Spinning Machines",
                "Weaving Machines",
                "Knitting Machines",
                "Textile Dyeing Machines",
                "Textile Printing Machines",
                "Finishing Machines",
                "Nonwoven Machines",
                "Textile Testing Machines",
                "Textile Reprocessing Machines",
                "Embroidery Machines",
              ].map((item, index) => (
                <Pressable
                  onPress={productPage}
                  key={index}
                  className="mt-3 w-[90%] h-[40px] rounded-md flex p-2 justify-center "
                >
                  <Text className="font-semibold text-lg text-black cursor-pointer hover:text-red-600 hover:underline">
                    {item}
                  </Text>
                </Pressable>
              ))}
            </View>
          </View>
          <View
            className="bg-zinc-200 ms-4 md:flex mb-4"
            style={{ width: isScreen ? "70%" : "100%" }}
          >
            {!isScreen && (
              <Pressable
                onPress={() => setIsOpen(!isOpen)}
                className="mt-4 p-3"
              >
                <Icon name="menu" size={30} color="black" />
              </Pressable>
            )}

            <View className="flex-1 justify-center items-center">
              <View className="p-4 w-[90%]">
                <Text className="bg-white shadow-md text-lg font-semibold md:text-2xl text-black p-3 rounded-lg">
                  All Machine is ready for Sale (38729)
                </Text>
              </View>
            </View>

            {/* ✅ Product List */}
            <View className="flex flex-col md:flex-row justify-center gap-16 p-3 flex-wrap mt-2">
              {[...Array(4)].map((_, index) => (
                <View
                  key={index}
                  className="mb-4 bg-TealGreen rounded-md"
                  style={{ width: isScreen ? "40%" : "100%", height: "400px" }}
                >

                  <Pressable onPress={productPage}>

                  <Image
                    className="rounded-t-sm"
                    source={require("../../../assets/machine/cone.jpg")}
                    style={{ width: "100%", height: 300 }}
                  />
                  <View className="p-5">
                    <Text className="font-bold text-xl text-white">
                      Machine Machine
                    </Text>
                    <Text className="font-semibold text-md text-white">
                      1000 of listings
                    </Text>
                    <Text className="font-semibold text-md text-white">
                      All different makes
                    </Text>
                  </View>
                  </Pressable>
                </View>
              ))}
            </View>
          </View>
        </View>

        <GuidePage />
        <Footer />
      </View>
    </ScrollView>
  );
}
