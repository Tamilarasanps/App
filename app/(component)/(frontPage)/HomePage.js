import { View, Text, Platform } from "react-native";
import React from "react";
import Recommeded from "./Recommeded";
import { ScrollView } from "react-native-gesture-handler";
import Explore from "./Explore";
import Contact from "./Contact";
import Footer from "./Footer";
import GuidePage from "./GuidePage";
import LocationBased from "./LocationBased";
import Header from "../(header)/Header";
import All from "./All";
import MObileHeader from "../(mobileHeader)/MobileHeader";
import ImageSlider from "../(mobileHeader)/ImageSlider";
import Banner from "./Banner";

export default function HomePage() {
  return (
    <ScrollView>
      <View>
        {Platform.OS === "web" && <Header />}
        {Platform.OS === "web" && <All />}
        {Platform.OS === "web" && <Banner />}

        {Platform.OS !== "web" && <MObileHeader />}
        {Platform.OS !== "web" && <ImageSlider />}

        <Recommeded />
        <Explore />
        {Platform.OS === "web" ? <GuidePage /> : null}
        <LocationBased />
        {Platform.OS === "web" ? <Contact /> : null}
        {Platform.OS === "web" ? <Footer /> : null}
      </View>
    </ScrollView>
  );
}
