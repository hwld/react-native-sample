import { NativeStackScreenProps } from "@react-navigation/native-stack";
import * as Sharing from "expo-sharing";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { RootStackParamList } from "../../App";

export const ImageView: React.FC<
  NativeStackScreenProps<RootStackParamList, "ImageDetail">
> = ({ navigation, route }) => {
  const selectedImage = route.params;

  const handleGoBack = () => {
    navigation.navigate("Home");
  };

  const openShareDialogAsync = async () => {
    if (!(await Sharing.isAvailableAsync())) {
      alert("Uh oh, sharing isn't available on your platform");
      return;
    }

    await Sharing.shareAsync(selectedImage?.localUri ?? "");
  };

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: selectedImage?.localUri ?? "" }}
        style={styles.thumbnail}
      />
      <TouchableOpacity onPress={openShareDialogAsync} style={styles.button}>
        <Text style={styles.buttonText}>Share this photo</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={handleGoBack}
        style={{ ...styles.button, marginTop: 10 }}
      >
        <Text style={styles.buttonText}>Go Back!</Text>
      </TouchableOpacity>
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
