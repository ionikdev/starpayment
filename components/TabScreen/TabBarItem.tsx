import React from "react";
import { View, StyleSheet, Animated } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
import EvilIcons from "@expo/vector-icons/EvilIcons";

interface TabBarItemProps {
  name: string;
  color: string;
  focused: boolean;
  iconLibrary: "FontAwesome" | "AntDesign" | "Ionicons" | "EvilIcons";
}

const TabBarItem: React.FC<TabBarItemProps> = ({
  name,
  color,
  focused,
  iconLibrary,
}) => {
  const translateY = new Animated.Value(focused ? 0 : 20);

  Animated.spring(translateY, {
    toValue: focused ? 0 : 20,
    useNativeDriver: false,
  }).start();

  return (
    <View style={styles.tabItem}>
      {iconLibrary === "FontAwesome" && (
        <FontAwesome name={name} size={20} color={color} style={styles.icon} />
      )}
      {iconLibrary === "AntDesign" && (
        <AntDesign name={name} size={20} color={color} style={styles.icon} />
      )}
      {iconLibrary === "Ionicons" && (
        <Ionicons name={name} size={20} color={color} style={styles.icon} />
      )}
      {iconLibrary === "EvilIcons" && (
        <EvilIcons name={name} size={24} color={color} style={styles.icon} />
      )}
      <Animated.View
        style={[
          styles.tabLine,
          {
            backgroundColor: focused ? "#8140CF" : "transparent",
            transform: [{ translateY }],
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  tabItem: {
    alignItems: "center",
    paddingVertical: 8,
  },
  icon: {
    marginBottom: 10, // Add margin to the icon to create space between the icon and the tab item
  },
  tabLine: {
    height: 2,
    width: 24,
    marginTop: 4,
  },
});

export default TabBarItem;
