import React, { useState, useRef } from "react";
import { Modal } from "react-native";
import { FlatList } from "react-native";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  Platform,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import { Link } from "expo-router";

const genders = ["Male", "Female"];

const signin = () => {
  const [isChecked, setChecked] = useState(false);
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [selectedGender, setSelectedGender] = useState("");
  const [genderModalVisible, setGenderModalVisible] = useState(false);

  const toggleCheckbox = () => {
    setChecked(!isChecked);
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView
          style={styles.keyboardAvoidingContainer}
          behavior={Platform.OS === "ios" ? "padding" : "height"} // Adjust behavior based on platform
        >
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.scrollContainer}
          >
            <View style={styles.heading}>
              <Text style={styles.headingText}>Sign in</Text>
              <Text style={styles.subheadingText}>
                Fill in the details below to get started.
              </Text>
            </View>

            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Email Address"
                placeholderTextColor="#9E9E9E"
                keyboardType="email-address"
                accessible={true}
                accessibilityLabel="Email Address"
              />

              <View style={styles.inputContainer}>
                <View style={styles.inputWithIcon}>
                  <TextInput
                    style={styles.passwordInput}
                    placeholder="Password"
                    placeholderTextColor="#9E9E9E"
                    secureTextEntry={!isPasswordVisible}
                    accessible={true}
                    accessibilityLabel="Password"
                  />
                  <TouchableOpacity
                    onPress={togglePasswordVisibility}
                    style={styles.passwordVisibilityButton}
                  >
                    <Icon
                      name={isPasswordVisible ? "eye-slash" : "eye"}
                      size={20}
                      color="#9E9E9E"
                    />
                  </TouchableOpacity>
                </View>
                {/* Add more input fields as needed */}
              </View>

              <View style={styles.checkboxContainer}>
                <View style={styles.checkboxLabel}>
                  <Text style={{ fontSize: 14 }}>Forgot password? </Text>
                  <TouchableOpacity>
                    <Text style={{ fontSize: 14, color: "#8140CF" }}>
                      Reset here
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={{ justifyContent: "space-between", flex: 0 }}>
                <Link href="/dashboard" asChild>
                  <TouchableOpacity style={styles.createAccount}>
                    <Text
                      style={{
                        textAlign: "center",
                        fontSize: 17,
                        color: "#FEFEFE",
                      }}
                    >
                      Sign in
                    </Text>
                  </TouchableOpacity>
                </Link>
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FEFEFE",
    paddingHorizontal: 18,
  },
  scrollContainer: {
    paddingBottom: 20,
  },
  heading: {
    paddingTop: 110,
    marginBottom: 15,
  },
  headingText: {
    marginBottom: 15,
    fontSize: 24,
    fontWeight: "700",
    color: "#121212",
  },
  subheadingText: {
    color: "#616161",
    marginBottom: 15,
  },
  inputContainer: {
    gap: 10,
  },
  keyboardAvoidingContainer: {
    flex: 1,
  },
  input: {
    backgroundColor: "#FFFFFF",
    borderColor: "#E0E0E0",
    borderWidth: 1,
    borderRadius: 12,
    height: 60,
    paddingHorizontal: 10,
    marginBottom: 10,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    // shadowOpacity: 0.01,
    // shadowRadius: 2,
    // elevation: 3,
  },
  genderInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
    backgroundColor: "#FFFFFF", // Add a background color
    borderColor: "#E0E0E0", // Add a border color
    borderWidth: 1, // Add a border width
    borderRadius: 12, // Add border radius
    paddingHorizontal: 10, // Add horizontal padding
    height: 60, // Set the height to match the input fields
  },

  passwordInput: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderColor: "#E0E0E0",
    borderWidth: 1,
    borderRadius: 12,
    height: 60,
    paddingHorizontal: 10,
    marginBottom: 10,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },

  inputWithIcon: {
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
  },

  passwordVisibilityButton: {
    position: "absolute",
    right: 10,
    top: "50%",
    transform: [{ translateY: -10 }], // Adjust the vertical position
  },

  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },

  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  checked: {
    backgroundColor: "#8140CF",
    borderColor: "#8140CF",
  },
  unchecked: {
    borderColor: "#E0E0E0",
  },
  checkboxLabel: {
    marginLeft: 10,
    gap: 2,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  createAccount: {
    width: 320,
    backgroundColor: "#8140CF",
    padding: 20,
    borderRadius: 32,
    marginTop:10
  },

  bottomSheetContent: {
    backgroundColor: "#FFFFFF",
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  bottomSheetHeading: {
    fontSize: 18,
    textAlign: "center",

    fontWeight: "700",
    marginBottom: 20,
    color: "#8A8A8A",
  },
  genderOption: {
    paddingVertical: 12,
  },
  genderOptionText: {
    fontSize: 14,
    fontWeight: "500",
  },
});

export default signin;
