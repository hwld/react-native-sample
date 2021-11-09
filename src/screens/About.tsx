import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import React from "react";
import { Button, Text, View } from "react-native";
import { RootParamList } from "../../App";

export const About: React.FC<BottomTabScreenProps<RootParamList>> = ({
  navigation,
}) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Image Picker</Text>
      <Button onPress={() => navigation.navigate("Home")} title="Go to Home" />
    </View>
  );
};
