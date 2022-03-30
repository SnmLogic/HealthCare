import React, { useState } from "react";
import { View, Text, TouchableOpacity, Dimensions } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import Popover from "react-native-popover-view";

const OverLay = ({ navigation }: NativeStackNavigationProp) => {
  const [bg, setBg] = useState("#223044");
  const [fontColor, setFontColor] = useState("white");
  return (
    <View
      style={{
        position: "absolute",
        bottom: 0,
        width: Dimensions.get("window").width,
        height: "50%",
        alignItems: "center",
        justifyContent: "center",
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        backgroundColor: "#223044",
      }}
    >
      <Popover
        from={
          <TouchableOpacity
            style={{
              width: "15%",
              borderRadius: 10,
              height: 5,
              backgroundColor: "white",
              top: "-20%",
            }}
          ></TouchableOpacity>
        }
        popoverStyle={{padding: 10, borderRadius: 100, width: 200, alignItems: "center"}}
        backgroundStyle={{ backgroundColor: 'transparent' }}
      >
        <Text>Made with ❤️  in <Text style={{color: "blue", fontWeight: "bold"}}>India</Text></Text>
      </Popover>
      <Text style={{ color: "white", fontSize: 50, fontWeight: "bold" }}>
        HealthCare
      </Text>
      <Text
        style={{
          color: "#DBDBDB",
          fontSize: 15,
          textAlign: "center",
          width: "90%",
          marginTop: 20,
        }}
      >
        Take care of your body, It's the only place you have to live
      </Text>

      <TouchableOpacity
        style={{
          borderRadius: 50,
          borderWidth: 1.5,
          borderColor: "white",
          backgroundColor: bg,
          width: Dimensions.get("screen").width - 50,
          paddingVertical: 10,
          alignItems: "center",
          justifyContent: "center",
          bottom: "-20%",
        }}
        onPress={() => {
          setFontColor("#223044"), setBg("white"), navigation.navigate("Home");
        }}
      >
        <Text style={{ color: fontColor, fontSize: 20, fontWeight: "bold" }}>
          Get Started
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default OverLay;
