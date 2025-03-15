import { View, Text, Platform, Pressable } from "react-native";
import React, { useState } from "react";
import { router } from "expo-router";

export default function All() {
  const [show, setShow] = useState(false);
  const [hoverClr, setHoverClr] = useState(null);

  const subCate = () => {
    router.push("/(component)/(screen)/CategoryList");
  };

  const subcategory = [
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
  ];

  return (
    <View className="">
      {Platform.OS === "web" && (
        <View
          className="flex  flex-row w-full mb-2 mt-5 flex justify-center"
          style={{ position: "sticky", top: 0 }}
        >
          {/* Categories Section */}
          <Pressable className="flex-1">
            <Text
              className="text-center text-TealGreen text-sm font-semibold md:text-lg md:font-bold"
              onMouseEnter={() => setShow(true)}
            >
              Categories
            </Text>

            {show && (
              <View className="relative flex ms-5 md:ms-32 mt-4 flex-row w-full mb-2 ">
                <Pressable className="flex-1">
                  {show && (
                    <View
                      className="absolute left-0 top-full w-[250%] border-2 border-gray-300 bg-gray-200 mt-2 rounded-md flex flex-row flex-wrap z-50 "
                      onMouseLeave={() => setShow(false)}
                    >
                      {subcategory.map((category, index) => (
                        <Pressable
                          key={index}
                          onMouseEnter={() => setHoverClr(index)}
                          onMouseLeave={() => setHoverClr(null)}
                          onPress={subCate}
                        >
                          <Text
                            className="p-5 text-lg"
                            style={{
                              // Adding dynamic styles for hover effects
                              textDecorationLine:
                                hoverClr === index ? "underline" : "none", // For underline effect
                              color: hoverClr === index ? "red" : "black", // For text color
                            }}
                          >
                            {category}
                          </Text>
                        </Pressable>
                      ))}
                    </View>
                  )}
                </Pressable>
              </View>
            )}
          </Pressable>

          {/* Fixed Price Section */}
          <Pressable className="flex-1">
            <Text className="text-center text-TealGreen text-sm font-semibold md:text-lg md:font-bold ">
              Fixed Price
            </Text>
          </Pressable>

          {/* Negotiable Price Section */}
          <Pressable className="flex-1">
            <Text className="text-center text-TealGreen text-sm font-semibold md:text-lg md:font-bold ">
              Negotiable Price
            </Text>
          </Pressable>

          {/* Favourite Section */}
          <Pressable className="flex-1">
            <Text className="text-center text-TealGreen text-sm font-semibold md:text-lg md:font-bold ">
              Favourite
            </Text>
          </Pressable>
        </View>
      )}
    </View>
  );
}
