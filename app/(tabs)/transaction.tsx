import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import AllTransaction from "../../components/Transactions/AllTransaction";
import CreditTransaction from "../../components/Transactions/CreditTransaction";
import DebitTransaction from "../../components/Transactions/DebitTransaction";

export default function TabTwoScreen() {
  const [selectedTab, setSelectedTab] = useState("All");

  const renderTransactions = () => {
    if (selectedTab === "All") {
      return <AllTransaction />;
    } else if (selectedTab === "Credit") {
      return <CreditTransaction />;
    } else if (selectedTab === "Debit") {
      return <DebitTransaction />;
    }
  };

  // Define the borderRadius dynamically based on the selected tab
  const selectedTabStyle = {
    backgroundColor: "rgba(129, 64, 207, 1)",
    borderTopLeftRadius: selectedTab === "All" ? 8 : 0,
    borderBottomLeftRadius: selectedTab === "All" ? 8 : 0,
    borderTopRightRadius: selectedTab === "Debit" ? 8 : 0,
    borderBottomRightRadius: selectedTab === "Debit" ? 8 : 0,
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.topNavigation}>
        <TouchableOpacity
          style={[
            styles.tabButton,
            selectedTab === "All" && selectedTabStyle,
          ]}
          onPress={() => setSelectedTab("All")}
        >
          <Text style={styles.tabText}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.tabButton,
            selectedTab === "Credit" && selectedTabStyle,
          ]}
          onPress={() => setSelectedTab("Credit")}
        >
          <Text style={styles.tabText}>Credit</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.tabButton,
            selectedTab === "Debit" && selectedTabStyle,
          ]}
          onPress={() => setSelectedTab("Debit")}
        >
          <Text style={styles.tabText}>Debit</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.transactionsContainer}>{renderTransactions()}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#FEFEFE",
    paddingHorizontal: 15,
  },
  topNavigation: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 8,
    marginTop: 100,
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
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
