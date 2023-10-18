import React, { useState, useRef } from "react";
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
import {
  BottomSheetModal,
  BottomSheetBackdrop,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import { Link } from "expo-router";

const genders = ["Male", "Female"];

const signup = () => {
  const [isChecked, setChecked] = useState(false);
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [genderModalVisible, setGenderModalVisible] = useState(false);
  const [selectedGender, setSelectedGender] = useState("");
  const bottomSheetRef = useRef<BottomSheetModal | null>(null);

  const toggleCheckbox = () => {
    setChecked(!isChecked);
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  const openGenderModal = () => {
    bottomSheetRef.current?.present();
  };

  const selectGender = (gender: string) => {
    setSelectedGender(gender);
    setGenderModalVisible(false);
    bottomSheetRef.current?.dismiss();
  };

  return (
    <BottomSheetModalProvider>
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
              <Text style={styles.headingText}>Create an account</Text>
              <Text style={styles.subheadingText}>
                Fill in the details below to get started.
              </Text>
            </View>

            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="First Name"
                placeholderTextColor="#9E9E9E"
                keyboardType="default"
                accessible={true}
                accessibilityLabel="First Name"
              />
              <TextInput
                style={styles.input}
                placeholder="Last Name"
                placeholderTextColor="#9E9E9E"
                keyboardType="default"
                accessible={true}
                accessibilityLabel="Last Name"
              />
              <TextInput
                style={styles.input}
                placeholder="Email Address"
                placeholderTextColor="#9E9E9E"
                keyboardType="email-address"
                accessible={true}
                accessibilityLabel="Email Address"
              />
              <TextInput
                style={styles.input}
                placeholder="Phone Number"
                placeholderTextColor="#9E9E9E"
                keyboardType="phone-pad"
                accessible={true}
                accessibilityLabel="Phone Number"
              />
              <TextInput
                style={styles.input}
                placeholder="Username"
                placeholderTextColor="#9E9E9E"
                accessible={true}
                accessibilityLabel="Username"
              />
              <TouchableOpacity
                style={styles.genderInputContainer}
                onPress={openGenderModal}
              >
                <TextInput
                  placeholder="Gender"
                  placeholderTextColor="#9E9E9E"
                  accessible={true}
                  accessibilityLabel="Gender"
                  value={selectedGender}
                  editable={false}
                />
                <Icon name="caret-down" size={20} color="#9E9E9E" />
              </TouchableOpacity>

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

              <TextInput
                style={styles.input}
                placeholder="Referral Code (optional)"
                placeholderTextColor="#9E9E9E"
                accessible={true}
                accessibilityLabel="Referral Code"
              />
              <View style={styles.checkboxContainer}>
                <TouchableOpacity
                  onPress={toggleCheckbox}
                  style={[
                    styles.checkbox,
                    isChecked ? styles.checked : styles.unchecked,
                  ]}
                >
                  {isChecked && <Icon name="check" size={15} color="#FFFFFF" />}
                </TouchableOpacity>
                <View style={styles.checkboxLabel}>
                  <Text style={{ fontSize: 14 }}>I agree to the</Text>
                  <TouchableOpacity>
                    <Text style={{ fontSize: 14, color: "#8140CF" }}>
                      Terms of Service
                    </Text>
                  </TouchableOpacity>
                  <Text>and</Text>
                  <TouchableOpacity>
                    <Text style={{ fontSize: 14, color: "#8140CF" }}>
                      Privacy Policy
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <Link href="/verify-otp" asChild>
                <TouchableOpacity style={styles.createAccount}>
                  <Text
                    style={{
                      textAlign: "center",
                      fontSize: 17,
                      color: "#FEFEFE",
                    }}
                  >
                    Create an account
                  </Text>
                </TouchableOpacity>
              </Link>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
        <BottomSheetModal
          ref={bottomSheetRef}
          snapPoints={["50%", "75%", "90%"]}
          backdropComponent={(props) => (
            <BottomSheetBackdrop {...props} enableTouchThrough={true} />
          )}
        >
          <View style={styles.bottomSheetContent}>
            <Text style={styles.bottomSheetHeading}> Gender</Text>
            {genders.map((gender) => (
              <TouchableOpacity
                key={gender}
                style={styles.genderOption}
                onPress={() => selectGender(gender)}
              >
                <Text style={styles.genderOptionText}>{gender}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </BottomSheetModal>
      </SafeAreaView>
    </BottomSheetModalProvider>
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

export default signup;
