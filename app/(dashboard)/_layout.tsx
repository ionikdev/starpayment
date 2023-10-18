import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";

const authLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="airtime-data"
        options={{
          headerTransparent: true,
          headerTitleAlign: "center",
          headerTitle: "",
          headerLeft: () => (
            <Link href="/dashboard" asChild>
              <TouchableOpacity>
                <View style={styles.backButtonAirtimeData}>
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
        name="cable-tv"
        options={{
          headerTransparent: true,
          headerTitleAlign: "center",

          headerTitleStyle: {
            fontSize: 20,
            fontWeight: "bold",
            color: "black",
          },

          headerTitle: " Cable Tv",
          headerLeft: () => (
            <Link href="/dashboard" asChild>
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
        name="electricity"
        options={{
          headerTransparent: true,
          headerTitleAlign: "center",

          headerTitleStyle: {
            fontSize: 20,
            fontWeight: "bold",
            color: "black",
          },
          headerTitle: " Electricity",
          headerLeft: () => (
            <Link href="/dashboard" asChild>
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
        name="internet"
        options={{
          headerTransparent: true,
          headerTitleAlign: "center",

          headerTitleStyle: {
            fontSize: 20,
            fontWeight: "bold",
            color: "black",
          },
          headerTitle: " Internet",
          headerLeft: () => (
            <Link href="/dashboard" asChild>
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
    </Stack>
  );
};

export default authLayout;

const styles = StyleSheet.create({
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  backButtonAirtimeData: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    marginTop: 30,
  },
});
