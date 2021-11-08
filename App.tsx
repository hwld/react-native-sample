import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Home } from "./src/pages/Home";
import { ImageView } from "./src/pages/ImageDetail";

export type RootStackParamList = {
  Home: undefined;
  ImageDetail: { localUri: string } | undefined;
};
const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ImageDetail" component={ImageView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
