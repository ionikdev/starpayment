import { StyleSheet, Text, View } from "react-native";
import React from "react";

const reward = () => {
  return (
    <View style={styles.container}>
      <Text>reward</Text>
    </View>
  );
};

export default reward;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#FEFEFE",
    paddingHorizontal: 15,
  },
});
