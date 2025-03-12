import {
  View,
  Text,
  Image,
  useWindowDimensions,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import All from "../(frontPage)/All";
import Header from "../(header)/Header";
import { ScrollView } from "react-native-gesture-handler";
import Footer from "../(frontPage)/Footer";
import Icon from "react-native-vector-icons/Ionicons";
import { router } from "expo-router";

export default function CategoryList() {
  const { width } = useWindowDimensions();
  const isScreen = width > 768; // ✅ Detect screen size (mobile or desktop)
  const [isOpen, setIsOpen] = useState(false);

  const subPage = () => {
    router.push("/(component)/(screen)/ProductList");
  };

  return (
    <ScrollView>
      <View>
        <Header />

        <All />

        <View className="flex flex-row w-full relative">
          <View
            className={`bg-red-500 transition-all duration-300 absolute z-10 ${
              isOpen || isScreen ? "flex" : "hidden"
            }`}
            style={{
              width: isScreen ? "30%" : "90%",
              height: "100%",
              position: isScreen ? "relative" : "absolute",
              top: 0,
              zIndex: 50,
            }}
          >
            <View className="flex items-center mt-4">
              {/* ✅ Close Button on Mobile */}
              {!isScreen && (
                <Pressable onPress={() => setIsOpen(false)} className="mb-4">
                  <Icon name="close" size={30} color="white" />
                </Pressable>
              )}

              {/* ✅ Category List */}
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
                  onPress={subPage}
                  key={index}
                  className="mt-3 w-[90%] h-[40px] rounded-md flex p-2 justify-center"
                >
                  <Text className="font-semibold text-xl text-white">
                    {item}
                  </Text>
                </Pressable>
              ))}
            </View>
          </View>

          {/* ✅ ====== Product Grid Section ====== */}
          <View
            className="bg-zinc-200 ms-4 md:flex mb-4"
            style={{ width: isScreen ? "70%" : "100%" }}
          >
            {/* ✅ Menu Icon for Mobile */}
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
                </View>
              ))}
            </View>
          </View>
        </View>

        {/* ✅ Footer */}
        <Footer />
      </View>
    </ScrollView>
  );
}
