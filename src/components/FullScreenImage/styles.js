import { StyleSheet, Dimensions } from "react-native";

export const styles = StyleSheet.create({
  fullImgContainer: {
    justifyContent: "center",
    height: Dimensions.get("screen").height,
    paddingBottom: 140,
    backgroundColor: "black",
  },
  imageOverlay: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
  },
});
