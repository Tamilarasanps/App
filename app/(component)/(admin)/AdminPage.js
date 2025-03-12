// import { View, Text, Pressable, useWindowDimensions, Animated } from "react-native";
// import { useRouter } from "expo-router";
// import { useState, useRef, useEffect } from "react";
// import { MaterialIcons } from "@expo/vector-icons";

// export default function AdminPage() {
//   const router = useRouter();
//   const { width } = useWindowDimensions();
//   const [isOpen, setIsOpen] = useState(false);
//   const sidebarAnimation = useRef(new Animated.Value(-250)).current; // Initial position for mobile

//   // Function to toggle sidebar open/close
//   const toggleSidebar = () => {
//     Animated.timing(sidebarAnimation, {
//       toValue: isOpen ? -250 : 0, // Move sidebar left (-250px) or show (0px)
//       duration: 300,
//       useNativeDriver: false, // Set to false if animation isn't working properly
//     }).start();
//     setIsOpen(!isOpen);
//   };

//   const navigateToCategory = () => router.push("/CategoryPage");

//   return (
//     <View className="flex-1">
//       {/* Mobile Menu Button (only for small screens) */}
//       {width < 768 && (
//         <Pressable onPress={toggleSidebar} className="absolute top-4 left-4 z-50 bg-gray-200 p-2 rounded-lg">
//           <MaterialIcons name="menu" size={30} color="black" />
//         </Pressable>
//       )}

//       {/* Sidebar (Handles all screen sizes) */}
//       <Animated.View
//         style={{
//           transform: [{ translateX: width < 768 ? sidebarAnimation : 0 }],
//           position: "absolute",
//           left: 0,
//           top: 0,
//           bottom: 0,
//           width: width < 600 ? "60%" : width < 768 ? "40%" : "20%",
//           backgroundColor: "#008080",
//           padding: 16,
//           zIndex: 100,
//           elevation: 5, // Shadow effect for Android
//         }}
//       >
//         <Text className="text-2xl font-bold text-white">Machine Seller</Text>
//         <View className="bg-red-500 w-full h-[40%] mt-9 items-center">
//           <Pressable onPress={navigateToCategory}>
//             <Text className="mt-9 text-xl font-semibold text-white border-b pb-2">
//               Category Page
//             </Text>
//           </Pressable>
//           <Text className="mt-9 text-xl font-semibold text-white border-b pb-2">
//             Profile Page
//           </Text>
//         </View>
//       </Animated.View>

//       {/* Close Sidebar on Click Outside (for mobile) */}
//       {isOpen && width < 768 && (
//         <Pressable
//           onPress={toggleSidebar}
//           className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-40"
//           style={{ zIndex: 50 }}
//         />
//       )}
//     </View>
//   );
// }

import { useState, useEffect } from "react";
import { useRouter } from "expo-router";
import {
  View,
  Text,
  Pressable,
  Animated,
  TouchableWithoutFeedback,
  useWindowDimensions,
} from "react-native";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";

export default function Sidebar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { width: screenWidth } = useWindowDimensions(); // Automatically updates on resize
  const isDesktop = screenWidth >= 768; // Always open on larger screens

  // Slide Animation
  const translateX = new Animated.Value(isDesktop ? 0 : -240);

  useEffect(() => {
    Animated.timing(translateX, {
      toValue: isMenuOpen || isDesktop ? 0 : -240,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [isMenuOpen, isDesktop]);

  const router = useRouter();
  const move = () => {
    router.push("/(component)/(admin)/CategoryPage");
  };

  return (
    <TouchableWithoutFeedback onPress={() => !isDesktop && setIsMenuOpen(false)}>
      <View className="flex flex-row h-screen">
        {/* Sidebar with Slide Animation */}
        <Animated.View
          style={{
            transform: [{ translateX }],
            position: isDesktop ? "relative" : "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: isDesktop ? "20%" : 240,
            backgroundColor: "#008080",
            padding: 16,
            zIndex: 10, // Ensures sidebar is above content
          }}
        >
          {/* Header with Menu Button */}
          <Pressable onPress={() => setIsMenuOpen(!isMenuOpen)} className="flex-row items-center mb-6">
            {isMenuOpen || isDesktop ? (
              <Text className="text-xl font-bold text-white flex-1">Machine Seller</Text>
            ) : null}
            <MaterialIcons name="menu" size={30} color="red" className="hidden xl:screen" />
          </Pressable>

          {/* Sidebar Menu Items */}
          {(isMenuOpen || isDesktop) && (
            <View className="space-y-6">
              <View className="flex-row items-center">
                <MaterialIcons name="home" size={30} color="red" />
                <Text className="text-white text-lg ml-2">Home</Text>
              </View>

              <View className="flex-row items-center">
                <MaterialCommunityIcons name="account" size={30} color="red" />
                <Text className="text-white text-lg ml-2">Profile</Text>
              </View>

              <View className="flex-row items-center">
                <MaterialIcons name="category" size={30} color="red" onPress={move} />
                <Text className="text-white text-lg ml-2" onPress={move}>Category</Text>
              </View>
            </View>
          )}
        </Animated.View>

        {/* Main Content */}
        <View className="flex-1 p-4">
          {/* Menu Icon for Mobile */}
          {!isDesktop && (
            <Pressable onPress={() => setIsMenuOpen(!isMenuOpen)} className="mb-4">
              <MaterialIcons name="menu" size={30} color="black" />
            </Pressable>
          )}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}




