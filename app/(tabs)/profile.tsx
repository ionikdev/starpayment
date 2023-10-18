import React from "react";

import {
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { router } from "expo-router";

const Profile = () => {
  const options = [
    {
      title: "Edit Profile",
      image: require("../../assets/icons/profile.png"),
      route: "/editprofile",
    },
    {
      title: "Referrals",
      image: require("../../assets/icons/referals.png"),
      route: "/editprofile",
    },
    {
      title: "Security",
      image: require("../../assets/icons/security.png"),
      route: "/security",
    },
    {
      title: "Privacy Policy",
      image: require("../../assets/icons/privacy.png"),
      route: "/editprofile",
    },
    {
      title: "Terms and Conditions",
      image: require("../../assets/icons/terms.png"),
      route: "/editprofile",
    },
    {
      title: "Customer Support",
      image: require("../../assets/icons/support.png"),
      route: "/editprofile",
    },
    {
      title: "Logout",
      image: require("../../assets/icons/logout.png"),
      route: "/editprofile",
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {options.map((option, index) => {
        return (
          <TouchableOpacity
            onPress={() => {
              if (option.route) {
                router.push(option.route as any);
              } else {
                console.warn("Route is undefined for action: ");
              }
            }}
            key={index}
            style={styles.option}
          >
            <Image
              style={{ width: 40, height: 40, resizeMode: "contain" }}
              source={option.image}
            />
            <Text style={styles.optionText}>{option.title}</Text>
            <Icon
              name="angle-right"
              size={20}
              color="#000"
              style={styles.icon}
            />
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#FEFEFE",
    paddingHorizontal: 15,
    paddingTop: 230,
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderColor: "#E7E7E7",
  },
  icon: {
    marginHorizontal: 10,
  },
  optionText: {
    fontSize: 16,
    flex: 1,
  },
});

export default Profile;
