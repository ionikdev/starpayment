import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const AllTransaction = () => {
  return (
    <View>
      <Image
        source={require("../../assets/images/dashboard/notransaction.png")}
      />
    </View>
  );
};

export default AllTransaction;

const styles = StyleSheet.create({});
