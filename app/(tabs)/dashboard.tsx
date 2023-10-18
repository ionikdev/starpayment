import React, { useState } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import { ScrollView } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Link, router } from "expo-router";

const actions = [
  {
    label: "Airtime/Data",
    icon: require("../../assets/icons/airtime.png"),
    route: "/airtime-data",
  },
  {
    label: "Internet",
    icon: require("../../assets/icons/internet.png"),
    route: "/internet",
  },
  {
    label: "Book Flight",
    icon: require("../../assets/icons/flight.png"),
    route: "/airtime-data",
  },
  {
    label: "Cable TV",
    icon: require("../../assets/icons/cable_tv.png"),
    route: "/cable-tv",
  },
  {
    label: "Electricity",
    icon: require("../../assets/icons/electricity.png"),
    route: "/electricity",
  },
  {
    label: "Education",
    icon: require("../../assets/icons/education.png"),
    route: "/electricity",
  },
  {
    label: "Buy Giftcard",
    icon: require("../../assets/icons/giftcard.png"),
    route: "/electricity",
  },
  {
    label: "Betting",
    icon: require("../../assets/icons/betting.png"),
    route: "/electricity",
  },
];

export default function TabOneScreen() {
  const [showBalance, setShowBalance] = useState(true);

  const toggleBalanceVisibility = () => {
    setShowBalance(!showBalance);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.card}>
        <Image
          style={styles.cardImage}
          source={require("../../assets/images/dashboard/headcard.png")}
        />
        <View style={styles.cardContent}>
          <Text style={styles.totalBalanceText}>Total balance</Text>
          <View style={styles.balanceContainer}>
            {showBalance ? (
              <Text style={styles.balanceAmountText}>₦500.00</Text>
            ) : (
              <Text style={styles.hiddenBalanceText}>*******</Text>
            )}
            <TouchableOpacity
              style={styles.toggleBalanceButton}
              onPress={toggleBalanceVisibility}
            >
              <Icon
                name={showBalance ? "eye-slash" : "eye"}
                size={20}
                color="rgba(254, 254, 254, 1)"
              />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity style={styles.fundButton} activeOpacity={1}>
              <Link href="/fundwallet">
                <Text style={styles.fundButtonText}>Fund Wallet</Text>
                <Icon name={"plus"} size={20} color="rgba(254, 254, 254, 1)" />
              </Link>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.quickActions}>
          <Text style={styles.Title}>Quick actions</Text>
          <View style={styles.actionsContainer}>
            {actions.map((action, index) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    if (action.route) {
                      router.push(action.route as any);
                    } else {
                      console.warn(
                        "Route is undefined for action: ",
                        action.label
                      );
                    }
                  }}
                  key={index}
                  style={styles.actionItem}
                >
                  <Image style={styles.actionIcon} source={action.icon} />
                  <Text style={styles.actionLabel}>{action.label}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>

        <Image
          style={styles.adcard}
          source={require("../../assets/images/dashboard/adcard.png")}
        />

        <View style={styles.quickActions}>
          <Text style={styles.Title}>Recent transactions</Text>
          <Image
            style={styles.noTransactioncard}
            source={require("../../assets/images/dashboard/notransaction.png")}
          />
        </View>
      </ScrollView>
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

  Title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  card: {
    width: 340,
    height: 176,
    marginTop: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  cardImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
    position: "absolute",
  },
  cardContent: {
    alignItems: "center",
  },
  totalBalanceText: {
    fontSize: 15,
    fontWeight: "400",
    color: "#F4F4F4",
    marginBottom: 5,
  },
  balanceContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  balanceAmountText: {
    fontSize: 26,
    color: "#FEFEFE",
    marginLeft: 15,
    fontWeight: "700",
  },

  hiddenBalanceText: {
    fontSize: 26,
    color: "#FEFEFE",
    fontWeight: "700",
    marginLeft: 20,
    opacity: 0.5,
  },
  toggleBalanceButton: {
    marginLeft: 10,
  },
  toggleBalanceButtonText: {
    color: "rgba(254, 254, 254, 1)",
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
  },
  fundButton: {
    width: 277,
    height: 44,
    backgroundColor: "rgba(255, 253, 253, 1)",
    padding: 10,
    opacity: 0.5,
    borderRadius: 32,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
  },
  fundButtonText: {
    color: "rgba(254, 254, 254, 5)",
    fontSize: 16,
    gap: 5,
    textAlign: "center",
    fontWeight: "bold",
  },
  quickActions: {
    alignSelf: "flex-start",
    marginTop: 20,
  },

  actionsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 15,
    justifyContent: "center",
    alignItems: "center",
    width: "auto",
  },
  actionItem: {
    alignItems: "center",
    marginBottom: 20,
    width: "20%",
  },
  actionIcon: {
    width: 48,
    height: 48,
    alignItems: "center",
    resizeMode: "contain",
  },
  actionLabel: {
    marginTop: 10,
    fontSize: 12,
  },

  adcard: {
    width: 320,
    height: 89,
    resizeMode: "contain",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  noTransactioncard: {
    width: 320,
    height: 89,
    resizeMode: "contain",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    marginTop: 15,
  },
});
