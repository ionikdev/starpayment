import { StyleSheet, Text, View, Switch, Image } from "react-native";
import React, { useState } from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import { TouchableOpacity } from "@gorhom/bottom-sheet";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";

const Security = () => {
  const [biometricsEnabled, setBiometricsEnabled] = useState(false);
  const data = [
    { title: "Change password", icon: "key" },
    { title: "Change transaction PIN", icon: "credit-card" },
  ];

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={{ fontSize: 30, fontWeight: "700", marginBottom: 20 }}>
        Security settings
      </Text>
      <ScrollView>
        <TouchableOpacity
          onPress={() => {
            router.push("/changepassword");
          }}
          style={styles.option}
        >
          <Image
            source={require("../../../assets/icons/lock.png")}
            style={styles.optionImage}
          />
          <Text style={styles.optionText}>Change Password</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            router.push("/changetransactionpin");
          }}
          style={styles.option}
        >
          <Image
            source={require("../../../assets/icons/password.png")}
            style={styles.optionImage}
          />
          <Text style={styles.optionText}>Change Transaction PIN</Text>
        </TouchableOpacity>

        <View style={styles.option}>
          <Image
            source={require("../../../assets/icons/scanner.png")}
            style={styles.optionImage}
          />
          <View style={styles.switchContainer}>
            <Text style={styles.optionText}>Face ID/Biometrics</Text>
          </View>
          <View style={{ marginLeft: 100 }}>
            <Switch
              value={biometricsEnabled}
              trackColor={{
                false: "black",
                true: "gray",
              }}
              style={{ transform: [{ scale: 1.2 }] }}
              thumbColor={biometricsEnabled ? "white" : "white"}
              onValueChange={(value) => setBiometricsEnabled(value)}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Security;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FEFEFE",
    paddingHorizontal: 15,
    paddingTop: 100,
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#EEEEEE",
    paddingBottom: 20,
    paddingVertical: 20,
  },
  optionImage: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  optionText: {
    fontSize: 18,
    color: "#1E1E1E",
    fontWeight: "bold",
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});
