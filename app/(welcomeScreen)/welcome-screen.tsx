import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useRef } from "react";
import { Link, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { TouchableOpacity } from "react-native-gesture-handler";
import LottieView from "lottie-react-native";

const welcomescreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />

      <LottieView
        autoPlay
        loop={true}
        speed={1}
        style={{
          width: 350,
          height: 350,
        }}
        source={require("../../assets/lottie/firstscreen.json")}
      />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",

          marginBottom: 10,
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontSize: 25, fontWeight: "800" }}>Make your </Text>
          <Text style={{ fontSize: 22, fontStyle: "italic" }}>
            bill payments easily{" "}
          </Text>
        </View>
      </View>

      <Text
        style={{
          marginBottom: 10,
          fontSize: 17,
          textAlign: "center",
          marginTop: 21,
        }}
      >
        With our user-friendly system, you can now make your bill payments
        easily and efficiently.
      </Text>
      <View>
        <Link href="/signup" asChild>
          <TouchableOpacity style={styles.createAccount}>
            <Text
              style={{ textAlign: "center", fontSize: 17, color: "#FEFEFE" }}
            >
              Create an account
            </Text>
          </TouchableOpacity>
        </Link>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 20,
          }}
        >
          <Text style={{ fontSize: 14, color: "#8A8A8A" }}>
            Already have an account?{" "}
          </Text>
          <Link href="/signin" asChild>
            <TouchableOpacity>
              <Text style={{ color: "#8140CF", fontSize: 14 }}>Sign in</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>

      <Stack.Screen options={{ headerShown: false }} />
    </SafeAreaView>
  );
};

export default welcomescreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 25,
    backgroundColor: "#FEFEFE",
  },
  createAccount: {
    width: 327,
    backgroundColor: "#8140CF",
    padding: 20,
    borderRadius: 32,
  },
});
