import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Airtime from "../../components/QuickAction/Airtime&Data/Airtime";
import Data from "../../components/QuickAction/Airtime&Data/Data";
import { StatusBar } from "expo-status-bar";

const airtimeAndData = () => {
  const [selectedTab, setSelectedTab] = useState("Airtime");
  const renderTransactions = () => {
    if (selectedTab === "Airtime") {
      return <Airtime />;
    } else if (selectedTab === "Data") {
      return <Data />;
    }
  };
  const headerTitle = selectedTab === "Airtime" ? "Airtime" : "Data";

  const selectedTabStyle = {
    backgroundColor: "rgba(129, 64, 207, 1)",
    color: "#fff",
    borderTopLeftRadius: selectedTab === "Airtime" ? 8 : 0,
    borderBottomLeftRadius: selectedTab === "Airtime" ? 8 : 0,
    borderTopRightRadius: selectedTab === "Data" ? 8 : 0,
    borderBottomRightRadius: selectedTab === "Data" ? 8 : 0,
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>{headerTitle}</Text>
      <View style={styles.topNavigation}>
        <TouchableOpacity
          style={[
            styles.tabButton,
            selectedTab === "Airtime" && selectedTabStyle,
          ]}
          onPress={() => setSelectedTab("Airtime")}
        >
          <Text style={styles.tabText}>Airtime</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.tabButton, selectedTab === "Data" && selectedTabStyle]}
          onPress={() => setSelectedTab("Data")}
        >
          <Text style={styles.tabText}>Data</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.transactionsContainer}>{renderTransactions()}</View>
    </SafeAreaView>
  );
};

export default airtimeAndData;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#FEFEFE",
    paddingHorizontal: 15,
    paddingTop: 40,
  },
  topNavigation: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 8,
    marginTop: 30,
    borderColor: "#ccc",
  },
  tabButton: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 10,
  },
  tabText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "rgba(152, 152, 152, 1)",
  },
  transactionsContainer: {
    marginTop: 20,
  },
});
