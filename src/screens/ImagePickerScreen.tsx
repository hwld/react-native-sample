import { Ionicons } from "@expo/vector-icons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import * as ImagePicker from "expo-image-picker";
import React from "react";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import logo from "../../assets/logo.png";
import { StackParamList } from "./Home";

export const ImagePickerScreen: React.FC<
  NativeStackScreenProps<StackParamList, "ImagePicker">
> = ({ navigation }) => {
  const openImagePickerAsyn = async () => {
    const permissonResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissonResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    const pickerResult = await ImagePicker.launchImageLibraryAsync();

    if (pickerResult.cancelled === true) {
      return;
    }

    navigation.navigate("ImageDetail", { localUri: pickerResult.uri });
  };

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <Text style={styles.instructions}>
        To share a photo from your phone with a friend, just press the button
        below!
      </Text>

      <TouchableHighlight onPress={openImagePickerAsyn} style={styles.button}>
        <Text style={styles.buttonText}>Pick a photo</Text>
      </TouchableHighlight>

      <Pressable
        android_disableSound={false}
        onPress={() => {
          alert("hello");
        }}
        style={({ pressed }) => ({
          marginTop: 10,
          padding: 10,
          borderRadius: 50,
          backgroundColor: pressed ? "#E2E8F0" : "#EDF2F7",
          shadowColor: "#000000",
          elevation: 5,
          shadowOffset: { width: 10, height: 10 },
        })}
      >
        <Ionicons name="water-sharp" size={32} color="#4299E1" />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 305,
    height: 159,
    marginBottom: 10,
  },
  instructions: {
    color: "#888",
    fontSize: 18,
    marginHorizontal: 15,
    marginBottom: 15,
  },
  button: {
    backgroundColor: "blue",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    color: "#fff",
  },
  thumbnail: {
    width: 300,
    height: 300,
    resizeMode: "contain",
    marginBottom: 15,
  },
});
