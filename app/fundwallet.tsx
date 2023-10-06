import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Stack } from "expo-router"; // Assuming you are using expo-router for navigation

const fundwallet = () => {
  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          headerTransparent: true,
          headerTitleAlign: "center",

          headerTitle: () => (
            <Text style={{ fontSize: 24, fontWeight: "bold" }}>
              Wallet Top-Up
            </Text>
          ),

          headerLeft: () => (
            <TouchableOpacity>
              <View style={styles.backButton}>
                {/* <Image
                  style={{ width: 20, height: 20, }}
                  source={require("../assets/images/backarrow.png")}
                /> */}
              </View>
            </TouchableOpacity>
          ),
        }}
      />

      <View style={styles.circle}>
        <Image
          style={styles.image}
          source={require("../assets/images/dashboard/moneys.png")}
        />
      </View>

      <Text style={styles.title}>
        Receive money into your wallet by using the bank details below.
      </Text>

      <View style={styles.infoContainer}>
        {renderInfoItem(
          "Bank",
          "Wema Bank",
          require("../assets/images/dashboard/bank.png")
        )}
        {renderInfoItem(
          "Account Number",
          "1239584226",
          require("../assets/images/dashboard/bank.png")
        )}
        {renderInfoItem(
          "Account Name",
          "ADEMOLA ADENIYI",
          require("../assets/images/dashboard/frame.png")
        )}
      </View>
      <View
        style={{
          flexDirection: "row",
          gap: 4,
          alignItems: "center",
          marginTop: 20,
        }}
      >
        <Image source={require("../assets/images/dashboard/bulb.png")} />
        <Text>You can only send a maximum of NGN500,000.00</Text>
      </View>
    </View>
  );
};

// Function to render an info item with a logo
const renderInfoItem = (title: string, value: string, logo: any) => {
  return (
    <View style={styles.infoItem}>
      <Image style={styles.infoLogo} source={logo} />
      <View>
        <Text style={styles.infoTitle}>{title}</Text>
        <Text style={styles.infoValue}>{value}</Text>
      </View>
    </View>
  );
};

export default fundwallet;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#FEFEFE",
    paddingHorizontal: 18,
  },
  backButton: {},
  circle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#F7F0FF",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 150,
    marginBottom: 20,
  },
  image: {
    width: 60,
    height: 60,
    resizeMode: "cover",
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    paddingHorizontal: 15,
    color: "#616161",
  },
  infoContainer: {
    marginTop: 30,
    alignItems: "center",
    borderWidth: 0.2,
    borderRadius: 10,
  },
  infoItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    width: 300,
    paddingVertical: 10,
    paddingHorizontal: 15,

    marginBottom: 15,
  },
  infoLogo: {
    width: 24,
    height: 24,
    resizeMode: "contain",
  },
  infoTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#8A8A8A",
  },
  infoValue: {
    fontSize: 23,
    fontWeight: "bold",
  },
});
