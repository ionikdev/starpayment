import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const DebitTransaction = () => {
  return (
    <View>
    <Image
        source={require("../../assets/images/dashboard/notransaction.png")}
      />
    </View>
  );
};

export default DebitTransaction;

const styles = StyleSheet.create({});
