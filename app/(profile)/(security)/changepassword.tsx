import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
} from "react-native";
import { Feather } from "@expo/vector-icons"; // You can replace this with your preferred icon library

const changepassword = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [reenterPassword, setReenterPassword] = useState("");

  const [currentPasswordSecure, setCurrentPasswordSecure] = useState(true);
  const [newPasswordSecure, setNewPasswordSecure] = useState(true);
  const [reenterPasswordSecure, setReenterPasswordSecure] = useState(true);

  const toggleCurrentPasswordVisibility = () => {
    setCurrentPasswordSecure(!currentPasswordSecure);
  };

  const toggleNewPasswordVisibility = () => {
    setNewPasswordSecure(!newPasswordSecure);
  };

  const toggleReenterPasswordVisibility = () => {
    setReenterPasswordSecure(!reenterPasswordSecure);
  };

  return (
    <View style={styles.container}>
      {/* Current Password Input Field */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Your current password"
          value={currentPassword}
          onChangeText={setCurrentPassword}
          secureTextEntry={currentPasswordSecure}
        />
        <TouchableOpacity onPress={toggleCurrentPasswordVisibility}>
          <Feather
            name={currentPasswordSecure ? "eye" : "eye-off"}
            size={24}
            color="#333"
          />
        </TouchableOpacity>
      </View>

      {/* New Password Input Field */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="New Password"
          value={newPassword}
          onChangeText={setNewPassword}
          secureTextEntry={newPasswordSecure}
        />
        <TouchableOpacity onPress={toggleNewPasswordVisibility}>
          <Feather
            name={newPasswordSecure ? "eye" : "eye-off"}
            size={24}
            color="#333"
          />
        </TouchableOpacity>
      </View>

      {/* Re-enter Password Input Field */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Re-enter password"
          value={reenterPassword}
          onChangeText={setReenterPassword}
          secureTextEntry={reenterPasswordSecure}
        />
        <TouchableOpacity onPress={toggleReenterPasswordVisibility}>
          <Feather
            name={reenterPasswordSecure ? "eye" : "eye-off"}
            size={24}
            color="#333"
          />
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity style={styles.saveedit}>
          <Text
            style={{
              textAlign: "center",
              fontSize: 17,
              color: "#FEFEFE",
            }}
          >
            Save Changes
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FEFEFE",
    paddingHorizontal: 15,
    paddingTop: 100,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E2D9EC",
    padding: 10,
    borderRadius: 12,
    marginBottom: 20,
  },
  input: {
    flex: 1,
    fontSize: 18,
    paddingVertical: 10,
  },
  saveedit: {
    marginTop: 200,
    width: 320,
    backgroundColor: "#8140CF",
    padding: 20,
    borderRadius: 32,
  },
});

export default changepassword;
