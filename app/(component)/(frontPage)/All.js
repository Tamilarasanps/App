// import { View, Text, Image, Platform, Pressable } from "react-native";
// import React, { useState, useEffect } from "react";

// export default function All() {
//   const [image, setImage] = useState(0);
//   const [show, setShow] = useState(false);
//   const [hoverClr, setHoverClr] = useState(null);
//   const subcategory = [
//     "Textile Machine",
//     "Dyeing Machine",
//     "Weaving Machine",
//     "Spinning Machine",
//     "Printing Machine",
//     "Cutting Machine",
//     "Finishing Machine",
//   ];
//   const img = [
//     require("../../../assets/machine/Screenshot.png"),
//     require("../../../assets/machine/cone.jpg"),
//     require("../../../assets/machine/machine.jpg"),
//     require("../../../assets/machine/printing.jpg"),
//   ];
//   useEffect(() => {
//     const intervel = setInterval(() => {
//       setImage((prev) => (prev + 1) % img.length);
//     }, 2000);
//     return () => clearInterval(intervel);
//   });
//   return (
//     <View className="bg-TealGreen " style={{ height: 325, marginBottom: 140 }}>
//       {Platform.OS === "web" && (
//         <View className=" mt-24 ">
//           <View className="flex flex-row  w-full mb-2 ">
//             <Pressable className="flex-1">
//               <Text
//                 className="text-center font-bold text-white text-lg "
//                 onMouseEnter={() => setShow(true)}
//               >
//                 All Categories
//               </Text>
//               {show && (
//                 <View
//                   className="w-[200%] bg-gray-300 ms-24 m-16"
//                   onMouseLeave={() => setShow(false)} // ✅ Close dropdown when cursor leaves the dropdown area
//                   style={{
//                     position: "absolute", // Ensure the dropdown is positioned over the content
//                     top: 0, // Position above the image
//                   }}
//                 >
//                   {subcategory.map((category, index) => (
//                     <Pressable
//                       key={index}
//                       style={[
//                         hoverClr === index && { backgroundColor: "green" },
//                       ]}
//                       onMouseEnter={() => setHoverClr(index)}
//                       onMouseLeave={() => setHoverClr(null)}
//                       onPress={() => alert(`You selected: ${category}`)}
//                     >
//                       <View className="w-full">
//                         <Text className="border p-5 w-full cursor-pointer">
//                           {category}
//                         </Text>
//                       </View>
//                     </Pressable>
//                   ))}
//                 </View>
//               )}
//             </Pressable>
//             <Pressable className="flex-1">
//               <Text className="text-center font-bold  text-white text-lg">
//                 Fixed Price
//               </Text>
//             </Pressable>
//             <Pressable className="flex-1">
//               <Text className="text-center text-lg font-bold  text-white ">
//                 Negotiable Price
//               </Text>
//             </Pressable>
//             <Pressable className="flex-1">
//               <Text className="text-center font-bold text-white text-lg">
//                 Favourite
//               </Text>
//             </Pressable>
//           </View>

//           <View>
//             <Text className="text-whi">Home</Text>
//           </View>

//           {Platform.OS === "web" && (
//             <View
//               className="justify-center items-center "
//               style={{ position: "relative" }}
//             >
//               <Image
//                 style={{
//                   width: "97%",
//                   height: 300,
//                   marginTop: 40,
//                   borderRadius: 2,
//                   // shadowColor: "black",
//                   shadowOffset: { width: 0, height: 2 },
//                   shadowOpacity: 0.5,
//                   shadowRadius: 10,
//                 }}
//                 source={img[image]}
//               />
//             </View>
//           )}
//         </View>
//       )}
//     </View>
//   );
// }

import { View, Text, Image, Platform, Pressable } from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/MaterialIcons";
import { router } from "expo-router";

export default function All() {
  const [show, setShow] = useState(false);
  const [hoverClr, setHoverClr] = useState(null);

  const subCate = () => {
    router.push("");
  };

  const subcategory = [
    "Textile Machine",
    "Dyeing Machine",
    "Weaving Machine",
    "Spinning Machine",
    "Printing Machine",
    "Cutting Machine",
    "Finishing Machine",
  ];

  return (
    <View className="">
      <View style={{ height: 200, position: "relative" }}>
        {Platform.OS === "web" && (
          <View className="mt-12">
            <View className="flex flex-row w-full mb-2">
              <Pressable className="flex-1">
                <Text
                  className="text-center text-TealGreen text-sm font-semibold md:text-lg md:font-bold"
                  onMouseEnter={() => setShow(true)}
                >
                  Categories
                  {/* <Icon name="keyboard-arrow-down" size={30} color="#fff" /> */}
                </Text>

                {show && (
                  <View
                    className="w-[200%] bg-gray-300 ms-24 m-16"
                    onMouseLeave={() => setShow(false)} // Close dropdown when cursor leaves
                    style={{
                      zIndex: 9999, // Ensure dropdown is above other elements
                      position: "absolute", // Ensure it floats above other elements
                    }}
                  >
                    {subcategory.map((category, index) => (
                      <Pressable
                        key={index}
                        style={[
                          hoverClr === index && { backgroundColor: "green" },
                        ]}
                        onMouseEnter={() => setHoverClr(index)}
                        onMouseLeave={() => setHoverClr(null)}
                        onPress={() => alert(`You selected: ${category}`)}
                      >
                        <View className="w-full">
                          <Text className="border p-5 w-full cursor-pointer">
                            {category}
                          </Text>
                        </View>
                      </Pressable>
                    ))}
                  </View>
                )}
              </Pressable>

              <Pressable className="flex-1">
                <Text className="text-center text-TealGreen text-sm font-semibold md:text-lg md:font-bold ">
                  Fixed Price
                </Text>
              </Pressable>
              <Pressable className="flex-1">
                <Text className="text-center text-TealGreen text-sm font-semibold md:text-lg md:font-bold ">
                  Negotiable Price
                </Text>
              </Pressable>
              <Pressable className="flex-1">
                <Text className="text-center text-TealGreen text-sm font-semibold md:text-lg md:font-bold ">
                  Favourite
                </Text>
              </Pressable>
            </View>

            <View>
              <Text className="text-TealGreen">Home</Text>
            </View>

            {/* Image section */}
          </View>
        )}
      </View>
    </View>
  );
}
