import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";

const authLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="security"
        options={{
          headerTransparent: true,
          headerTitle: "",
          headerLeft: () => (
            <Link href="/profile">
              <TouchableOpacity>
                <View style={styles.backButton}>
                  <Image
                    style={{ width: 24, height: 24, resizeMode: "contain" }}
                    source={require("../../../assets/images/backarrow.png")}
                  />
                </View>
              </TouchableOpacity>
            </Link>
          ),
        }}
      />
      <Stack.Screen
        name="changepassword"
        options={{
          headerTransparent: true,
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontSize: 20,
            fontWeight: "bold",
            color: "black",
          },
          headerTitle: " Change password",
          headerLeft: () => (
            <Link href="/security" asChild>
              <TouchableOpacity>
                <View style={styles.backButton}>
                  <Image
                    style={{ width: 24, height: 24, resizeMode: "contain" }}
                    source={require("../../../assets/images/backarrow.png")}
                  />
                </View>
              </TouchableOpacity>
            </Link>
          ),
        }}
      />
      <Stack.Screen
        name="changetransactionpin"
        options={{
          headerTransparent: true,
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontSize: 20,
            fontWeight: "bold",
            color: "black",
          },
          headerTitle: "",
          headerLeft: () => (
            <Link href="/security" asChild>
              <TouchableOpacity>
                <View style={styles.backButton}>
                  <Image
                    style={{ width: 24, height: 24, resizeMode: "contain" }}
                    source={require("../../../assets/images/backarrow.png")}
                  />
                </View>
              </TouchableOpacity>
            </Link>
          ),
        }}
      />
      <Stack.Screen
        name="confirmchangetransactionpin"
        options={{
          headerTransparent: true,
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontSize: 20,
            fontWeight: "bold",
            color: "black",
          },
          headerTitle: "",
          headerLeft: () => (
            <Link href="/security" asChild>
              <TouchableOpacity>
                <View style={styles.backButton}>
                  <Image
                    style={{ width: 24, height: 24, resizeMode: "contain" }}
                    source={require("../../../assets/images/backarrow.png")}
                  />
                </View>
              </TouchableOpacity>
            </Link>
          ),
        }}
      />
      <Stack.Screen
        name="enternewpin"
        options={{
          headerTransparent: true,
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontSize: 20,
            fontWeight: "bold",
            color: "black",
          },
          headerTitle: "",
          headerLeft: () => (
            <Link href="/security" asChild>
              <TouchableOpacity>
                <View style={styles.backButton}>
                  <Image
                    style={{ width: 24, height: 24, resizeMode: "contain" }}
                    source={require("../../../assets/images/backarrow.png")}
                  />
                </View>
              </TouchableOpacity>
            </Link>
          ),
        }}
      />

      {/* <Stack.Screen name="" options={{ headerShown: false }} />
      <Stack.Screen name="" options={{ headerShown: false }} />
      <Stack.Screen name="" options={{ headerShown: false }} /> */}
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
});
