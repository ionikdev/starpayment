import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";

const authLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="signup"
        options={{
          headerTransparent: true,
          headerTitle: "",
          headerLeft: () => (
            <Link href="/welcome-screen" asChild>
              <TouchableOpacity>
                <View style={styles.backButton}>
                  <Image
                    style={{ width: 24, height: 24, resizeMode: "contain" }}
                    source={require("../../assets/images/backarrow.png")}
                  />
                </View>
              </TouchableOpacity>
            </Link>
          ),
        }}
      />
      <Stack.Screen
        name="signin"
        options={{
          headerTransparent: true,
          headerTitle: "",
          headerLeft: () => (
            <Link href="/welcome-screen" asChild>
              <TouchableOpacity>
                <View style={styles.backButton}>
                  <Image
                    style={{ width: 24, height: 24, resizeMode: "contain" }}
                    source={require("../../assets/images/backarrow.png")}
                  />
                </View>
              </TouchableOpacity>
            </Link>
          ),
        }}
      />
      <Stack.Screen
        name="verify-otp"
        options={{
          headerTransparent: true,
          headerTitle: "",
          headerLeft: () => (
            <Link href="/signup" asChild>
              <TouchableOpacity>
                <View style={styles.backButton}>
                  <Image
                    style={{ width: 24, height: 24, resizeMode: "contain" }}
                    source={require("../../assets/images/backarrow.png")}
                  />
                </View>
              </TouchableOpacity>
            </Link>
          ),
        }}
      />
      <Stack.Screen name="setpin" options={{ headerShown: false }} />
      <Stack.Screen name="setpin-confirm" options={{ headerShown: false }} />
      <Stack.Screen name="reset-password" options={{ headerShown: false }} />
    </Stack>
  );
};

export default authLayout;

const styles = StyleSheet.create({
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    marginTop: 30,
  },
});
