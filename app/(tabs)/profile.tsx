import React from "react";

import {
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome"; // Import the icon library of your choice

const Profile = () => {
  const options = [
    { title: "Edit Profile", image: require("../../assets/icons/profile.png") },
    { title: "Referrals", image: require("../../assets/icons/referals.png") },
    { title: "Security", image: require("../../assets/icons/security.png") },
    {
      title: "Privacy Policy",
      image: require("../../assets/icons/privacy.png"),
    },
    {
      title: "Terms and Conditions",
      image: require("../../assets/icons/terms.png"),
    },
    {
      title: "Customer Support",
      image: require("../../assets/icons/support.png"),
    },
    { title: "Logout", image: require("../../assets/icons/logout.png") },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {options.map((option, index) => (
        <TouchableOpacity key={index} style={styles.option} onPress={() => ""}>
          <Image
            style={{ width: 40, height: 40, resizeMode: "contain" }}
            source={option.image}
          />
          <Text style={styles.optionText}>{option.title}</Text>
          <Icon name="angle-right" size={20} color="#000" style={styles.icon} />
        </TouchableOpacity>
      ))}
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
