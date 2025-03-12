import { View, Text, Image } from "react-native";
import React, { useState, useEffect } from "react";

export default function Banner() {
  const [image, setImage] = useState(0);
  const img = [
    require("../../../assets/machine/Screenshot.png"),
    require("../../../assets/machine/cone.jpg"),
    require("../../../assets/machine/machine.jpg"),
    require("../../../assets/machine/printing.jpg"),
  ];

  useEffect(() => {
    const intervel = setInterval(() => {
      setImage((prev) => (prev + 1) % img.length);
    }, 2000);
    return () => clearInterval(intervel);
  });
  return (
    <View className="bg-TealGreen" style={{ height: 150, marginBottom: 180 }}>
      <View className="justify-center items-center relative ]">
        <Image
          style={{
            width: "97%",
            height: 300,
            // marginTop: 40,
            borderRadius: 2,
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            // Lower z-index for the image, to make dropdown appear above it
          }}
          source={img[image]}
        />
      </View>
    </View>
  );
}
