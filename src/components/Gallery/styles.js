import { StyleSheet, Dimensions } from "react-native";

export const styles = StyleSheet.create({
  container: {
    marginTop: 15,
  },
  activityIndicator: {
    marginTop: Dimensions.get("screen").height * 0.4,
  },
  postsContainer: {
    margin: 20,
    marginLeft: 30,
    flexDirection: "column",
    alignItems: "center",
    color: "#0099ff",
    borderBottomColor: '#2a9d8f',
    borderBottomWidth: 1,
  },
  pagination: {
    flexDirection: "row",
    marginBottom: 10,
    justifyContent: "center",
  },
  description: {
    marginTop: 10
  }
});
