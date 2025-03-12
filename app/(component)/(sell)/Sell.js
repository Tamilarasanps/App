import {
  View,
  Text,
  ScrollView,
  TextInput,
  Pressable,
  Image,
  Platform,
  Button,
  Alert,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Dropdown } from "react-native-element-dropdown";
import { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../(header)/Header";
import { Video } from "expo-av";
import axios from "axios";
import Toast from "react-native-toast-message";

export default function Sell() {
  const [value, setValue] = useState("");
  const [subcato, setSubcato] = useState("");
  const [machineMake, setMachineMake] = useState("");
  const [radio, setRadiobtn] = useState("Dismantled");
  // const [phone, setPhone] = useState("");
  // const [email, setEmail] = useState("");
  // const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [selectedImage, setSelectedImage] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState([]);
  const [negotiable, setNegotiable] = useState(false);
  const [description, setDescription] = useState("");

  const data = [
    { label: "Machine category 1", value: "1" },
    { label: "Machine category 2", value: "2" },
    { label: "Machine category 3", value: "3" },
  ];
  const subcategory = [
    { label: "Sub Category 1", value: "1" },
    { label: "Sub Category 2", value: "2" },
    { label: "Sub Category 3", value: "3" },
  ];
  const make = [
    { label: "Machine Make 1", value: "1" },
    { label: "Machine Make 2", value: "2" },
    { label: "Machine Make 3", value: "3" },
  ];
  const radiobtn = [
    { id: "1", label: "Running", value: "1" },
    { id: "2", label: "Dismantled", value: "2" },
  ];
  console.log(selectedVideo);
  console.log(selectedImage);
  const pickImage = async () => {
    const { status } = ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("allow files", "allow to open");
    }
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      aspect: [4, 3],
      quality: 0.8,
      allowsEditing: true,
    });
    if (!result.canceled) {
      const fileUri = result.assets[0];
      if (selectedImage.length < 10) {
        setSelectedImage((prevImg) => [...prevImg, fileUri]);
      } else {
        alert("Image Limit Reached");
      }
    }
    console.log(selectedImage, "upload image");
  };

  const deleteImg = (index) => {
    const newImg = selectedImage.filter((_, i) => i !== index);
    setSelectedImage(newImg);
  };

  const pickVideo = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (status !== "granted") {
      Alert.alert("Permission Required", "Please allow access to the gallery.");
      return;
    }

    const videoResult = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Videos,
      allowsEditing: true,
      quality: 0.8,
    });
    console.log(selectedVideo, "upload video");

    if (!videoResult.canceled && videoResult.assets.length > 0) {
      setSelectedVideo((prevVideos) => [...prevVideos, videoResult.assets[0]]);
    }
  };
  const deleteVid = (index) => {
    const newVid = selectedVideo.filter((_, i) => i !== index);
    setSelectedVideo(newVid);
  };

  const sentData = async () => {
    const formData = new FormData();
    formData.append("industry", value);
    formData.append("category", subcato);
    formData.append("make", machineMake);
    formData.append("price", price);
    formData.append("negotiable", negotiable);
    formData.append("description", description);
    if (selectedImage && selectedImage.length > 0) {
      selectedImage.forEach((img) => {
        console.log(img);
        formData.append("images", img.file);
      });
    }
    if (selectedVideo && selectedVideo.length > 0) {
      selectedVideo.forEach((vid) => {
        console.log(vid);
        formData.append("videos", vid.file);
      });
    }
    try {
      const response = await axios.post(
        "http://192.168.1.5:5000/productupload",
        formData,
        { headers: { "content-type": "multipart/form-data" } }
      );

      console.log(response.status, "uploaded successfully data");

      if (response.status === 201 || response.status === 200) {
        console.log("toast is triged");
        Toast.show({
          type: "success",
          text1: "Success",
          text2: response.data.message || "Data uploaded successfully!",
          position: "top",
        });
      } else {
        alert("error in upload");
      }
    } catch (error) {
      alert("Error in sending data");
      console.log("Error in sending data:", error.response);
      return "error";
    }
  };

  return (
    <ScrollView>
      <Header />
      <SafeAreaView>
        <View className="bg-white py-8 px-8 rounded-lg shadow-lg mx-auto mt-8 w-[90%] max-w-3xl">
          <Text className="text-3xl font-bold text-center text-teal-600">
            Upload Form
          </Text>
          <View className="h-[2px] bg-gray-300 my-6 mx-auto w-[90%]" />

          {/* Machine Images Section */}
          <Text className="text-lg font-semibold text-teal-600 mt-6">
            Machine Images
          </Text>
          <View className="flex flex-row">
            <View className="mt-7">
              <MaterialIcons
                name="insert-photo"
                size={50}
                color="teal"
                onPress={pickImage}
              />
            </View>
            <View
              // className="border-2 border-gray-300 rounded-md p-2"
              style={{ height: 100, width: 500, marginLeft: 120 }}
            >
              <ScrollView horizontal>
                {selectedImage.map((imageUri, index) => (
                  <View key={index}>
                    <Image
                      className=" rounded-md"
                      source={{ uri: imageUri.uri }}
                      style={{ width: 80, height: 80, marginRight: 10 }}
                    />

                    <TouchableOpacity
                      style={{
                        position: "absolute",
                        top: 3,
                        right: 10,
                        backgroundColor: "rgba(0,0,0,0.5)",
                        borderRadius: 10,
                        padding: 5,
                      }}
                      onPress={() => deleteImg(index)}
                    >
                      <Text style={{ color: "white" }}>X</Text>
                    </TouchableOpacity>
                  </View>
                ))}
              </ScrollView>
            </View>
          </View>

          {/* Machine Videos Section */}
          <Text className="text-lg font-semibold text-teal-600 mt-6">
            Machine Videos
          </Text>
          <MaterialIcons
            name="videocam"
            onPress={pickVideo}
            size={50}
            color="teal"
          />

          {/* Display selected videos */}
          <ScrollView horizontal>
            {selectedVideo.map((vid, index) => (
              <View key={index} style={{ marginRight: 10 }}>
                <Video
                  source={{ uri: vid.uri }}
                  style={{ width: 80, height: 80, borderRadius: 8 }}
                  useNativeControls
                  resizeMode="cover"
                />
                <TouchableOpacity
                  style={{
                    position: "absolute",
                    top: 3,
                    right: 10,
                    backgroundColor: "rgba(0,0,0,0.5)",
                    borderRadius: 10,
                    padding: 5,
                  }}
                  onPress={() => deleteVid(index)}
                >
                  <Text style={{ color: "white" }}>X</Text>
                </TouchableOpacity>
              </View>
            ))}
          </ScrollView>

          {/* Industry Details Section */}
          <Text className="text-lg font-semibold text-teal-600 mt-6">
            Industry
          </Text>
          <Dropdown
            style={{
              height: 50,
              width: Platform.OS === "web" ? "55%" : "100%",
              marginTop: 10,
              borderColor: "gray",
              borderWidth: 1,
              borderRadius: 5,
              padding: 10,
            }}
            data={data}
            labelField="label"
            valueField="value"
            placeholder="Select Industry"
            value={value}
            onChange={(item) => setValue(item.value)}
          />
          <Text className="text-lg font-semibold text-teal-600 mt-6">
            Category
          </Text>
          <Dropdown
            style={{
              height: 50,
              width: Platform.OS === "web" ? "55%" : "100%",
              marginTop: 10,
              borderColor: "gray",
              borderWidth: 1,
              borderRadius: 5,
              padding: 10,
            }}
            data={subcategory}
            labelField="label"
            valueField="value"
            placeholder="Select Industry"
            value={subcato}
            onChange={(item) => setSubcato(item.value)}
          />
          <Text className="text-lg font-semibold text-teal-600 mt-6">Make</Text>
          <Dropdown
            style={{
              height: 50,
              width: Platform.OS === "web" ? "55%" : "100%",
              marginTop: 10,
              borderColor: "gray",
              borderWidth: 1,
              borderRadius: 5,
              padding: 10,
            }}
            data={make}
            labelField="label"
            valueField="value"
            placeholder="Select Industry"
            value={machineMake}
            onChange={(item) => setMachineMake(item.value)}
          />

          {/* Radio Buttons for Condition */}

          <Text className="text-lg font-semibold text-teal-600 mt-6">
            Condition:
          </Text>
          <View className="flex flex-row gap-10 mt-4">
            {radiobtn.map((item) => (
              <Pressable
                key={item.id}
                onPress={() => setRadiobtn(item.value)}
                className={`px-4 py-2 rounded-sm ${
                  radio === item.value
                    ? "bg-teal-600 text-white"
                    : "bg-gray-200 text-gray-600"
                }`}
              >
                <Text className="text-sm">{item.label}</Text>
              </Pressable>
            ))}
          </View>

          {/* Price Input Section */}
          <Text className="text-lg font-semibold text-teal-600 mt-6">
            Price:
          </Text>
          <View className="flex flex-row items-center mt-4">
            <TextInput
              className="border border-gray-300 rounded-lg w-[50%] p-3  outline-teal-600"
              placeholder="Enter price"
              keyboardType="numeric"
              value={price}
              onChangeText={(item) => setPrice(item)}
            />
            <View className="flex flex-row items-center ml-4">
              <Pressable
                onPress={() => setNegotiable(!negotiable)}
                className={`w-5 h-5 rounded-sm border-2 ${
                  negotiable
                    ? "bg-yellow-400 border-yellow-400"
                    : "border-gray-400"
                }`}
              >
                {negotiable && (
                  <Text className="text-white font-bold text-center">✔</Text>
                )}
              </Pressable>
              <Text className="ml-2 text-gray-600">Negotiable</Text>
            </View>
          </View>

          <Text className="text-lg font-semibold text-teal-600 mt-6">
            Description:
          </Text>

          <TextInput
            className={`border border-gray-300 rounded-lg h-48 ${
              Platform.OS === "web" ? "w-[50%]" : "w-full"
            } mt-4 p-3 text-gray-500  outline-teal-600`}
            placeholder="Type about your product"
            value={description}
            onChangeText={(item) => setDescription(item)}
            placeholderTextColor="gray"
            style={{
              textAlignVertical: "center",
            }}
          />
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Button title="Click" onPress={sentData} />
            <Toast />
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}
