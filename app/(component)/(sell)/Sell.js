// import {
//   View,
//   Text,
//   ScrollView,
//   TextInput,
//   Pressable,
//   Image,
//   Platform,
//   Button,
//   Alert,
//   TouchableOpacity,
// } from "react-native";
// import { MaterialIcons } from "@expo/vector-icons";
// import { Dropdown } from "react-native-element-dropdown";
// import { useState } from "react";
// import * as ImagePicker from "expo-image-picker";
// import { SafeAreaView } from "react-native-safe-area-context";
// import Header from "../(header)/Header";
// import { Video } from "expo-av";
// import axios from "axios";
// import Toast from "react-native-toast-message";

// export default function Sell() {
//   const [value, setValue] = useState("");
//   const [subcato, setSubcato] = useState("");
//   const [machineMake, setMachineMake] = useState("");
//   const [radio, setRadiobtn] = useState("Dismantled");
//   // const [phone, setPhone] = useState("");
//   // const [email, setEmail] = useState("");
//   // const [location, setLocation] = useState("");
//   const [price, setPrice] = useState("");
//   const [selectedImage, setSelectedImage] = useState([]);
//   const [selectedVideo, setSelectedVideo] = useState([]);
//   const [negotiable, setNegotiable] = useState(false);
//   const [description, setDescription] = useState("");

//   const data = [
//     { label: "Machine category 1", value: "1" },
//     { label: "Machine category 2", value: "2" },
//     { label: "Machine category 3", value: "3" },
//   ];
//   const subcategory = [
//     { label: "Sub Category 1", value: "1" },
//     { label: "Sub Category 2", value: "2" },
//     { label: "Sub Category 3", value: "3" },
//   ];
//   const make = [
//     { label: "Machine Make 1", value: "1" },
//     { label: "Machine Make 2", value: "2" },
//     { label: "Machine Make 3", value: "3" },
//   ];
//   const radiobtn = [
//     { id: "1", label: "Running", value: "1" },
//     { id: "2", label: "Dismantled", value: "2" },
//   ];
//   console.log(selectedVideo);
//   console.log(selectedImage);
//   const pickImage = async () => {
//     const { status } = ImagePicker.requestMediaLibraryPermissionsAsync();
//     if (status !== "granted") {
//       Alert.alert("allow files", "allow to open");
//     }
//     const result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.Images,
//       aspect: [4, 3],
//       quality: 0.8,
//       allowsEditing: true,
//     });
//     if (!result.canceled) {
//       const fileUri = result.assets[0];
//       if (selectedImage.length < 10) {
//         setSelectedImage((prevImg) => [...prevImg, fileUri]);
//       } else {
//         alert("Image Limit Reached");
//       }
//     }
//     console.log(selectedImage, "upload image");
//   };

//   const deleteImg = (index) => {
//     const newImg = selectedImage.filter((_, i) => i !== index);
//     setSelectedImage(newImg);
//   };

//   const pickVideo = async () => {
//     const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

//     if (status !== "granted") {
//       Alert.alert("Permission Required", "Please allow access to the gallery.");
//       return;
//     }

//     const videoResult = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.Videos,
//       allowsEditing: true,
//       quality: 0.8,
//     });
//     console.log(selectedVideo, "upload video");

//     if (!videoResult.canceled && videoResult.assets.length > 0) {
//       setSelectedVideo((prevVideos) => [...prevVideos, videoResult.assets[0]]);
//     }
//   };
//   const deleteVid = (index) => {
//     const newVid = selectedVideo.filter((_, i) => i !== index);
//     setSelectedVideo(newVid);
//   };

//   const sentData = async () => {
//     const formData = new FormData();
//     formData.append("industry", value);
//     formData.append("category", subcato);
//     formData.append("make", machineMake);
//     formData.append("price", price);
//     formData.append("negotiable", negotiable);
//     formData.append("description", description);
//     if (selectedImage && selectedImage.length > 0) {
//       selectedImage.forEach((img) => {
//         console.log(img);
//         formData.append("images", img.file);
//       });
//     }
//     if (selectedVideo && selectedVideo.length > 0) {
//       selectedVideo.forEach((vid) => {
//         console.log(vid);
//         formData.append("videos", vid.file);
//       });
//     }
//     try {
//       const response = await axios.post(
//         "http://192.168.1.5:5000/productupload",
//         formData,
//         { headers: { "content-type": "multipart/form-data" } }
//       );

//       console.log(response.status, "uploaded successfully data");

//       if (response.status === 201 || response.status === 200) {
//         console.log("toast is triged");
//         Toast.show({
//           type: "success",
//           text1: "Success",
//           text2: response.data.message || "Data uploaded successfully!",
//           position: "top",
//         });
//       } else {
//         alert("error in upload");
//       }
//     } catch (error) {
//       alert("Error in sending data");
//       console.log("Error in sending data:", error.response);
//       return "error";
//     }
//   };

//   return (
//     <ScrollView>
//       <Header />
//       <SafeAreaView>
//         <View className="bg-white py-8 px-8 rounded-lg shadow-lg mx-auto mt-8 w-[90%] max-w-3xl">
//           <Text className="text-3xl font-bold text-center text-teal-600">
//             Upload Form
//           </Text>
//           <View className="h-[2px] bg-gray-300 my-6 mx-auto w-[90%]" />

//           {/* Machine Images Section */}
//           <Text className="text-lg font-semibold text-teal-600 mt-6">
//             Machine Images
//           </Text>
//           <View className="flex flex-row">
//             <View className="mt-7">
//               <MaterialIcons
//                 name="insert-photo"
//                 size={50}
//                 color="teal"
//                 onPress={pickImage}
//               />
//             </View>
//             <View
//               // className="border-2 border-gray-300 rounded-md p-2"
//               style={{ height: 100, width: 500, marginLeft: 120 }}
//             >
//               <ScrollView horizontal>
//                 {selectedImage.map((imageUri, index) => (
//                   <View key={index}>
//                     <Image
//                       className=" rounded-md"
//                       source={{ uri: imageUri.uri }}
//                       style={{ width: 80, height: 80, marginRight: 10 }}
//                     />

//                     <TouchableOpacity
//                       style={{
//                         position: "absolute",
//                         top: 3,
//                         right: 10,
//                         backgroundColor: "rgba(0,0,0,0.5)",
//                         borderRadius: 10,
//                         padding: 5,
//                       }}
//                       onPress={() => deleteImg(index)}
//                     >
//                       <Text style={{ color: "white" }}>X</Text>
//                     </TouchableOpacity>
//                   </View>
//                 ))}
//               </ScrollView>
//             </View>
//           </View>

//           {/* Machine Videos Section */}
//           <Text className="text-lg font-semibold text-teal-600 mt-6">
//             Machine Videos
//           </Text>
//           <MaterialIcons
//             name="videocam"
//             onPress={pickVideo}
//             size={50}
//             color="teal"
//           />

//           {/* Display selected videos */}
//           <ScrollView horizontal>
//             {selectedVideo.map((vid, index) => (
//               <View key={index} style={{ marginRight: 10 }}>
//                 <Video
//                   source={{ uri: vid.uri }}
//                   style={{ width: 80, height: 80, borderRadius: 8 }}
//                   useNativeControls
//                   resizeMode="cover"
//                 />
//                 <TouchableOpacity
//                   style={{
//                     position: "absolute",
//                     top: 3,
//                     right: 10,
//                     backgroundColor: "rgba(0,0,0,0.5)",
//                     borderRadius: 10,
//                     padding: 5,
//                   }}
//                   onPress={() => deleteVid(index)}
//                 >
//                   <Text style={{ color: "white" }}>X</Text>
//                 </TouchableOpacity>
//               </View>
//             ))}
//           </ScrollView>

//           {/* Industry Details Section */}
//           <Text className="text-lg font-semibold text-teal-600 mt-6">
//             Industry
//           </Text>
//           <Dropdown
//             style={{
//               height: 50,
//               width: Platform.OS === "web" ? "55%" : "100%",
//               marginTop: 10,
//               borderColor: "gray",
//               borderWidth: 1,
//               borderRadius: 5,
//               padding: 10,
//             }}
//             data={data}
//             labelField="label"
//             valueField="value"
//             placeholder="Select Industry"
//             value={value}
//             onChange={(item) => setValue(item.value)}
//           />
//           <Text className="text-lg font-semibold text-teal-600 mt-6">
//             Category
//           </Text>
//           <Dropdown
//             style={{
//               height: 50,
//               width: Platform.OS === "web" ? "55%" : "100%",
//               marginTop: 10,
//               borderColor: "gray",
//               borderWidth: 1,
//               borderRadius: 5,
//               padding: 10,
//             }}
//             data={subcategory}
//             labelField="label"
//             valueField="value"
//             placeholder="Select Industry"
//             value={subcato}
//             onChange={(item) => setSubcato(item.value)}
//           />
//           <Text className="text-lg font-semibold text-teal-600 mt-6">Make</Text>
//           <Dropdown
//             style={{
//               height: 50,
//               width: Platform.OS === "web" ? "55%" : "100%",
//               marginTop: 10,
//               borderColor: "gray",
//               borderWidth: 1,
//               borderRadius: 5,
//               padding: 10,
//             }}
//             data={make}
//             labelField="label"
//             valueField="value"
//             placeholder="Select Industry"
//             value={machineMake}
//             onChange={(item) => setMachineMake(item.value)}
//           />

//           {/* Radio Buttons for Condition */}

//           <Text className="text-lg font-semibold text-teal-600 mt-6">
//             Condition:
//           </Text>
//           <View className="flex flex-row gap-10 mt-4">
//             {radiobtn.map((item) => (
//               <Pressable
//                 key={item.id}
//                 onPress={() => setRadiobtn(item.value)}
//                 className={`px-4 py-2 rounded-sm ${
//                   radio === item.value
//                     ? "bg-teal-600 text-white"
//                     : "bg-gray-200 text-gray-600"
//                 }`}
//               >
//                 <Text className="text-sm">{item.label}</Text>
//               </Pressable>
//             ))}
//           </View>

//           {/* Price Input Section */}
//           <Text className="text-lg font-semibold text-teal-600 mt-6">
//             Price:
//           </Text>
//           <View className="flex flex-row items-center mt-4">
//             <TextInput
//               className="border border-gray-300 rounded-lg w-[50%] p-3  outline-teal-600"
//               placeholder="Enter price"
//               keyboardType="numeric"
//               value={price}
//               onChangeText={(item) => setPrice(item)}
//             />
//             <View className="flex flex-row items-center ml-4">
//               <Pressable
//                 onPress={() => setNegotiable(!negotiable)}
//                 className={`w-5 h-5 rounded-sm border-2 ${
//                   negotiable
//                     ? "bg-yellow-400 border-yellow-400"
//                     : "border-gray-400"
//                 }`}
//               >
//                 {negotiable && (
//                   <Text className="text-white font-bold text-center">✔</Text>
//                 )}
//               </Pressable>
//               <Text className="ml-2 text-gray-600">Negotiable</Text>
//             </View>
//           </View>

//           <Text className="text-lg font-semibold text-teal-600 mt-6">
//             Description:
//           </Text>

//           <TextInput
//             className={`border border-gray-300 rounded-lg h-48 ${
//               Platform.OS === "web" ? "w-[50%]" : "w-full"
//             } mt-4 p-3 text-gray-500  outline-teal-600`}
//             placeholder="Type about your product"
//             value={description}
//             onChangeText={(item) => setDescription(item)}
//             placeholderTextColor="gray"
//             style={{
//               textAlignVertical: "center",
//             }}
//           />
//           <View
//             style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
//           >
//             <Button title="Click" onPress={sentData} />
//             <Toast />
//           </View>
//         </View>
//       </SafeAreaView>
//     </ScrollView>
//   );
// }

import {
  SafeAreaView,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  Pressable,
  Text,
  Image,
  TextInput,
  View,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Dropdown } from "react-native-element-dropdown";
import { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { Video } from "expo-av";
import axios from "axios";
import Toast from "react-native-toast-message";
import Header from "../(header)/Header";

export default function Sell() {
  const [value, setValue] = useState("");
  const [subcato, setSubcato] = useState("");
  const [machineMake, setMachineMake] = useState("");
  const [radio, setRadiobtn] = useState("");
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

  const pickMedia = async (type) => {
    if (Platform.OS === "android" && Platform.Version < 29) {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        return Toast.show({
          type: "error",
          text1: "Permission Required",
          text2: "Please allow access to the gallery.",
          position: "top",
          topOffset: 0,
        });
      }
    }

    const mediaTypes = type === "image" ? ["images"] : ["videos"];

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes,
      quality: 0.8,
      allowsMultipleSelection: type === "image",
    });

    if (!result.canceled && result.assets.length > 0) {
      let validFiles = [];

      if (type === "image") {
        if (selectedImage.length + result.assets.length > 10) {
          return Toast.show({
            type: "error",
            text1: "Image Limit Exceeded",
            text2: "You can upload a maximum of 10 images.",
            position: "top",
            topOffset: 0,
          });
        }

        result.assets.forEach((file) => {
          if (file.fileSize > 2 * 1024 * 1024) {
            Toast.show({
              type: "error",
              text1: "File size exceeds 2MB.",
              text2: "Please select a smaller file.",
              position: "top",
              topOffset: 0,
            });
          } else {
            validFiles.push({
              uri: file.uri,
              name: file.fileName || `image_${Date.now()}.jpg`,
              type: file.mimeType || "image/jpeg",
            });
          }
        });

        if (validFiles.length > 0) {
          setSelectedImage((prev) => [...prev, ...validFiles]);
        }
      } else {
        const fileUri = result.assets[0];
        if (fileUri.duration > 16000) {
          return Toast.show({
            type: "error",
            text1: "File duration should be within 15 seconds",
            position: "top",
            topOffset: 0,
          });
        } else if (selectedVideo.length > 0 || fileUri.length > 1) {
          return Toast.show({
            type: "error",
            text1: "You can upload only one video",
            text2: "video duration should be within 15 Sec",
            position: "top",
            topOffset: 0,
          });
        }
        setSelectedVideo((prev) => [...prev, fileUri]);
      }
    }
  };

  selectedImage.forEach((img) => {
    if (img.file) console.log(true);
  });
  const deleteImg = (index) => {
    const newImg = selectedImage.filter((_, i) => i !== index);
    setSelectedImage(newImg);
  };

  const deleteVid = (index) => {
    const newVid = selectedVideo.filter((_, i) => i !== index);
    setSelectedVideo(newVid);
  };

  const sentData = async () => {
    if (
      !value ||
      !subcato ||
      !machineMake ||
      !price ||
      !description ||
      !radiobtn
    ) {
      Toast.show({
        type: "error",
        text1: "Missing Fields",
        text2: "Please fill all required fields before submitting.",
        position: "top",
        topOffset: 0,
      });
      return;
    }

    if (
      (!selectedImage || selectedImage.length === 0) &&
      (!selectedVideo || selectedVideo.length === 0)
    ) {
      Toast.show({
        type: "error",
        text1: "No Media Selected",
        text2: "Please upload at least one image or video.",
        position: "top",
        topOffset: 0,
      });
      return;
    }

    const formData = new FormData();
    formData.append("industry", value);
    formData.append("category", subcato);
    formData.append("make", machineMake);
    formData.append("price", price);
    formData.append("negotiable", negotiable ? "true" : "false");
    formData.append("description", description);

    selectedImage?.forEach((img) => {
      if (img?.file) {
        formData.append("images", img.file);
      }
    });

    selectedVideo?.forEach((vid) => {
      if (vid?.file) {
        formData.append("videos", vid.file);
      }
    });

    try {
      const response = await axios.post(
        "http://localhost:5000/productupload",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      console.log(response.status, "uploaded successfully data");

      if (response.status === 201 || response.status === 200) {
        // Reset all states

        Toast.show({
          type: "success",
          text1: "Success",
          text2: response.data.message || "Data uploaded successfully!",
          position: "top",
          topOffset: 0,
        });

        setTimeout(() => {
          setValue("");
          setSubcato("");
          setMachineMake("");
          setPrice("");
          setNegotiable(false);
          setDescription("");
          setSelectedImage([]);
          setRadiobtn("");
          setSelectedVideo([]);
        }, 1000);
      } else {
        Toast.show({
          type: "error",
          text1: "Upload Failed",
          text2: "Something went wrong. Please try again.",
          position: "top",
          topOffset: 0,
        });
      }
    } catch (error) {
      Toast.show({
        type: "error",
        text1: "Error",
        text2: "Failed to send data. Please check your connection.",
        position: "top",
        topOffset: 0,
      });
      console.log("Error in sending data:", error.response);
    }
  };

  return (
    <SafeAreaView className="flex-1">
      <View className="absolute top-10 left-0 right-0 z-50">
        <Toast />
      </View>
      <Header />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="flex-1"
      >
        <ScrollView
          className={`bg-white z-10 py-8 rounded-lg shadow-lg mx-auto mt-8 ${
            Platform.OS === "web" ? "max-w-2xl px-24" : "max-w-[100%] px-8"
          } mb-8`}
        >
          {/* <View className="w-[80%] mx-auto"> */}
          <Text className="text-3xl font-bold text-center text-teal-600">
            Upload Form
          </Text>
          <View className="h-[2px] bg-gray-300 my-6 mx-auto w-[90%]" />

          {/* Machine Images Section */}
          <Text className="text-lg font-semibold text-teal-600 mt-6">
            Machine Images
          </Text>
          <View className="mt-7 bg-gray-100 py-8 w-[100%] mx-auto flex flex-row gap-8 px-4">
            <MaterialIcons
              className="my-auto"
              name="insert-photo"
              onPress={() => pickMedia("image")}
              size={50}
              color="teal"
            />

            {/* Display selected images */}
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              className="flex-1"
            >
              {selectedImage.length > 0 ? (
                selectedImage.map((imageUri, index) => (
                  <View key={index} className="relative mr-3">
                    <Image
                      source={{ uri: imageUri.uri }}
                      style={{ width: 80, height: 80, borderRadius: 8 }}
                    />
                    <Pressable
                      className="absolute top-1 right-1 bg-red-500 rounded-full w-5 h-5 flex items-center justify-center shadow-md"
                      onPress={() => deleteImg(index)}
                    >
                      <MaterialIcons name="close" size={14} color="white" />
                    </Pressable>
                  </View>
                ))
              ) : (
                <Text className="text-gray-500 text-sm italic my-auto">
                  No images selected
                </Text>
              )}
            </ScrollView>
          </View>

          {/* Machine Videos Section */}
          <Text className="text-lg font-semibold text-teal-600 mt-6">
            Machine Videos
          </Text>
          <View className="mt-7 bg-gray-100 py-8 w-[100%] mx-auto flex flex-row gap-8 px-4">
            <MaterialIcons
              className="my-auto"
              name="videocam"
              onPress={() => pickMedia("video")}
              size={50}
              color="teal"
            />
            {/* Display selected videos */}
            <ScrollView horizontal>
              {selectedVideo.length > 0 ? (
                selectedVideo.map((vid, index) => (
                  <View key={index} className="mr-2">
                    <Video
                      source={{ uri: vid.uri }}
                      style={{ width: 80, height: 80, borderRadius: 8 }}
                      useNativeControls
                      resizeMode="cover"
                    />

                    <Pressable
                      className="absolute top-1 right-1 bg-red-500 rounded-full w-5 h-5 flex items-center justify-center shadow-md"
                      onPress={() => deleteVid(index)}
                    >
                      <MaterialIcons name="close" size={14} color="white" />
                    </Pressable>
                  </View>
                ))
              ) : (
                <Text className="text-gray-500 text-sm italic my-auto">
                  No Videos selected
                </Text>
              )}
            </ScrollView>
          </View>

          {/* Industry Details Section */}
          <Text className="text-lg font-semibold text-teal-600 mt-6">
            Industry
          </Text>
          <Dropdown
            style={{
              height: 50,
              width: Platform.OS === "web" ? "100%" : "100%",
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
              width: Platform.OS === "web" ? "100%" : "100%",
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
              width: Platform.OS === "web" ? "100%" : "100%",
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
                    ? "bg-teal-600"
                    : "bg-gray-200 text-gray-600"
                }`}
              >
                <Text
                  className={`text-sm ${
                    radio === item.value ? "text-white" : "text-gray-600"
                  }`}
                >
                  {item.label}
                </Text>
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
                className={`w-5 h-5 rounded-sm border-2 flex items-center justify-center ${
                  negotiable
                    ? "bg-yellow-400 border-yellow-400"
                    : "border-gray-400"
                }`}
              >
                {negotiable && (
                  <Text className="text-white font-bold text-xs md:text-sm leading-none">
                    ✔
                  </Text>
                )}
              </Pressable>
              <Text className="ml-2 text-gray-600">Negotiable</Text>
            </View>
          </View>

          {/* Location Section with Suggestions */}
          {/* <Text className="text-lg font-semibold text-teal-600 mt-6">
            Location:
          </Text>
          <View className="relative mt-4">
            <TextInput
              className="border border-gray-300 rounded-lg w-full p-3"
              placeholder="Type to search location"
              value={location}
              onChangeText={(text) => {
                setLocation(text);
                fetchSuggestions(text); // Function to fetch location suggestions
              }}
            />
            {locationSuggestions.length > 0 && (
              <View className="absolute top-12 left-0 right-0 bg-white shadow-lg rounded-lg z-10">
                {locationSuggestions.map((suggestion, index) => (
                  <Pressable
                    key={index}
                    onPress={() => {
                      setLocation(suggestion);
                      setLocationSuggestions([]); // Clear suggestions after selection
                    }}
                    className="p-2 border-b border-gray-300 last:border-b-0"
                  >
                    <Text>{suggestion}</Text>
                  </Pressable>
                ))}
              </View>
            )}
          </View> */}

          <Text className="text-lg font-semibold text-teal-600 mt-6">
            Description:
          </Text>

          <TextInput
            className={`border border-gray-300 rounded-lg h-48 ${
              Platform.OS === "web" ? "w-[100%]" : "w-full"
            } mt-4 p-3 text-gray-500  outline-teal-600`}
            placeholder="Type about your product"
            value={description}
            onChangeText={(item) => setDescription(item)}
            placeholderTextColor="gray"
            style={{
              textAlignVertical: "center",
            }}
          />
          <Pressable
            onPress={sentData}
            className="bg-teal-600 w-max px-4 py-2 rounded-md mx-auto mt-12 mb-24"
          >
            <Text style={{ color: "white", fontSize: 16, fontWeight: "bold" }}>
              Post
            </Text>
          </Pressable>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
