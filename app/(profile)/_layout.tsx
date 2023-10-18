import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";

const authLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="editprofile"
        options={{
          headerTransparent: true,
          headerTitleAlign: "center",

          headerTitleStyle: {
            fontSize: 20,
            fontWeight: "bold",
            color: "black",
          },
          headerTitle: " Edit profile",
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

      <Stack.Screen name="(security)" options={{ headerShown: false }} />
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
