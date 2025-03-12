import axios from "axios";
import { useState } from "react";
import {
  View,
  Text,
  Button,
  TextInput,
  FlatList,
  Dimensions,
  Pressable,
} from "react-native";

import { IconButton } from "react-native-paper";

export default function AdminCategory() {
  const [cat, setCat] = useState({});
  const [tempText, setTempText] = useState({ category: "", subCategory: "" });
  const [makeInputs, setMakeInputs] = useState({}); // Stores input per subcategory

  const handleAddSubcategory = () => {
    if (!tempText.category.trim() || !tempText.subCategory.trim()) return;
    setCat((prev) => ({
      ...prev,
      [tempText.category]: {
        ...prev[tempText.category],
        [tempText.subCategory]:
          prev[tempText.category]?.[tempText.subCategory] || [],
      },
    }));
    setTempText((pre) => ({ ...pre, subCategory: "" }));
    setMakeInputs((prev) => ({ ...prev, [tempText.subCategory]: "" })); // Initialize input field for new subcategory
  };

  const handleAddMakers = (subCategory) => {
    if (
      !tempText.category.trim() ||
      !subCategory.trim() ||
      !makeInputs[subCategory]?.trim()
    )
      return;

    setCat((prev) => ({
      ...prev,
      [tempText.category]: {
        ...prev[tempText.category],
        [subCategory]: [
          ...(prev[tempText.category]?.[subCategory] || []),
          makeInputs[subCategory].trim(),
        ],
      },
    }));

    setMakeInputs((prev) => ({ ...prev, [subCategory]: "" }));
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "http://192.168.234.158:5000/adminCategories",
        { cat },
        { headers: { "Content-Type": "application/json" } }
      );
      alert("Data sent successfully!");
      setTempText({ category: "", subCategory: "" });
      setMakeInputs({});
      console.log(response.data, "sent success");
    } catch (error) {
      if (error.response?.data?.code === 11000) {
        alert("You have already entered this field");
      } else {
        alert(error.response?.data?.message || "Duplicate error");
      }
      console.log("Backend error:", error.response?.data);
    }
  };

  return (
    <View className="flex flex-col lg:flex-row w-full min-h-screen p-5 space-y-5 lg:space-y-0 lg:space-x-5">
      {/* Left Panel (Form Input) */}

      <View className="bg-blue-500 p-5 flex-1 rounded-lg shadow-md">
        <Text className="text-white text-lg font-bold mb-3 text-center">
          Add Machine Details
        </Text>
        <Text className="text-white text-lg font-bold mb-3">Add Category</Text>
        <View>
          <TextInput
            placeholder="Enter Category Name"
            value={tempText.category}
            onChangeText={(text) =>
              setTempText({ ...tempText, category: text })
            }
            className="border border-gray-300 p-2 rounded mb-3 w-full bg-white"
          />

          <TextInput
            placeholder="Enter Subcategory Name"
            value={tempText.subCategory}
            onChangeText={(text) =>
              setTempText({ ...tempText, subCategory: text })
            }
            className="border border-gray-300 p-2 rounded mb-3 w-full bg-white"
          />
          <Pressable
            onPress={handleAddSubcategory}
            className="bg-red-500 rounded-md text-white text-center"
          >
            Add SubCategory
          </Pressable>

          <Pressable
            onPress={handleSubmit}
            className="bg-green-500 text-center text-white mt-9"
          >
            Send to Back End
          </Pressable>
        </View>
      </View>

      {/* Right Panel (Data Display) */}
      <View className="bg-green-500 p-5 flex-1 rounded-lg shadow-md">
        {Object.keys(cat).length === 0 ? (
          <Text className="text-white">No categories added</Text>
        ) : (
          <FlatList
            className="w-full"
            data={Object.entries(cat)}
            keyExtractor={(item) => item[0]}
            renderItem={({ item }) => (
              <View>
                <Text className="text-lg font-bold text-gray-900">
                  Category: {item[0]}
                </Text>

                {Object.keys(item[1]).length === 0 ? (
                  <Text className="text-gray-600">No subcategories</Text>
                ) : (
                  Object.entries(item[1]).map(([sub, makers]) => (
                    <View
                      key={sub}
                      className="ml-4 mt-2 bg-white shadow-md rounded-lg p-4"
                    >
                      <Text className="text-md font-semibold text-gray-700">
                        Subcategory: {sub}
                      </Text>

                      <TextInput
                        placeholder="Enter Maker Name"
                        value={makeInputs[sub] || ""}
                        onChangeText={(text) =>
                          setMakeInputs((prev) => ({ ...prev, [sub]: text }))
                        }
                        className="border border-gray-300 p-2 rounded mb-3 w-full bg-white"
                      />
                      <Button
                        title="Add Maker"
                        onPress={() => handleAddMakers(sub)}
                      />

                      {makers.length === 0 ? (
                        <Text className="text-gray-500 ml-2">No makers</Text>
                      ) : (
                        makers.map((maker, index) => (
                          <View
                            key={index}
                            className="flex-row items-center ml-3"
                          >
                            <Text className="text-gray-600">- {maker}</Text>
                            <IconButton
                              icon="delete"
                              size={20}
                              color="red"
                              onPress={() => {
                                const updatedMakers = makers.filter(
                                  (_, i) => i !== index
                                );
                                setCat((prev) => ({
                                  ...prev,
                                  [item[0]]: {
                                    ...prev[item[0]],
                                    [sub]: updatedMakers,
                                  },
                                }));
                              }}
                            />
                          </View>
                        ))
                      )}
                    </View>
                  ))
                )}
              </View>
            )}
          />
        )}
      </View>
    </View>
  );
}
