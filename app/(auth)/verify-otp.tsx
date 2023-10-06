import { Link } from "expo-router";
import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
  ScrollView, // Import ScrollView
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const VerifyOtp = () => {
  const [otp, setOtp] = useState("");
  const [isOtpVisible, setIsOtpVisible] = useState(false);

  const toggleOtpVisibility = () => {
    setIsOtpVisible(!isOtpVisible);
  };

  const handleContinuePress = () => {
    // Handle continue button press here
  };

  const handleResendPress = () => {
    // Handle resend OTP button press here
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={{ paddingTop: 150 }}>
        <View style={styles.circle}>
          <Image
            style={styles.image}
            source={require("../../assets/images/auth/sms-notification.png")}
          />
        </View>
      </View>
      <Text style={styles.verifyText}>Verify OTP</Text>
      <Text style={styles.descriptionText}>
        A 4-digit code has been sent to your email address
        ademolainreallife@gmail.com
      </Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="OTP"
          placeholderTextColor="#9E9E9E"
          keyboardType="numeric"
          secureTextEntry={!isOtpVisible}
          value={otp}
          onChangeText={(text) => setOtp(text)}
        />
        <TouchableOpacity onPress={toggleOtpVisibility} style={styles.eyeIcon}>
          <Icon
            name={isOtpVisible ? "eye" : "eye-slash"}
            size={24}
            color="#000"
          />
        </TouchableOpacity>
      </View>
      <View style={styles.bottomButtons}>
        <Link href="/setpin" asChild>
          <TouchableOpacity
            style={styles.bottomButtonContinue}
            onPress={handleContinuePress}
          >
            <Text style={styles.buttonText}>Continue</Text>
          </TouchableOpacity>
        </Link>
        <Link href="/signup" asChild>
          <TouchableOpacity
            style={styles.bottomButtonReset}
            onPress={handleResendPress}
          >
            <Text style={styles.buttonText}>Resend OTP in 00:34</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#FEFEFE",
    paddingHorizontal: 18,
  },
  circle: {
    width: 132,
    height: 132,
    borderRadius: 66,
    backgroundColor: "#F5EDFF",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  image: {
    width: 60,
    height: 60,
    resizeMode: "cover",
  },
  verifyText: {
    fontSize: 24,
    fontWeight: "700",
    color: "#121212",
    marginBottom: 10,
  },
  descriptionText: {
    fontSize: 16,
    color: "#616161",
    textAlign: "center",
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 12,
    height: 56,
    paddingHorizontal: 10,
    width: "100%",
    marginBottom: 20,
  },
  input: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  eyeIcon: {
    padding: 10,
  },
  bottomButtons: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
    gap: 10,
    flex: 1,
    width: "100%",
    marginBottom: 25,
  },
  bottomButtonContinue: {
    width: 327,
    backgroundColor: "#8140CF",
    padding: 15,
    borderRadius: 32,
  },
  bottomButtonReset: {
    width: 327,
    backgroundColor: "#ECDCFF",
    padding: 15,
    borderRadius: 32,
  },
  buttonText: {
    color: "#FFF",
    textAlign: "center",
    fontSize: 17,
  },
});

export default VerifyOtp;
