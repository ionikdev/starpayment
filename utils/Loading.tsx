import React from "react";
import { View, ActivityIndicator, Text, StyleSheet } from "react-native";

const Loading = () => {
  return (
    <View style={styles.loadingContainer}>
      <ActivityIndicator size="large" color="#78B7FF" />
      <Text style={styles.loadingText}>Loading...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.8)", // Optional: adds a semi-transparent white background
  },
  loadingText: {
    marginTop: 10,
    color: "#78B7FF",
  },
});

export default Loading;
