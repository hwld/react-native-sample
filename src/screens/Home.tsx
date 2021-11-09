import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { ImageDetail } from "./ImageDetail";
import { ImagePickerScreen } from "./ImagePickerScreen";

export type StackParamList = {
  ImagePicker: undefined;
  ImageDetail: { localUri: string } | undefined;
};
const Stack = createNativeStackNavigator<StackParamList>();

export const Home: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ImagePicker" component={ImagePickerScreen} />
      <Stack.Screen name="ImageDetail" component={ImageDetail} />
    </Stack.Navigator>
  );
};
