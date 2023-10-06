import { useRoute } from "@react-navigation/native";
import { router } from "expo-router";
import React, { useState, createRef, useEffect } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
} from "react-native";

const SetPin = () => {
  const inputRefs = Array.from({ length: 4 }, () => createRef<TextInput>());

  const [pin, setPin] = useState(["", "", "", ""]); // Initialize with four empty strings
  const [digitEntered, setDigitEntered] = useState([
    false,
    false,
    false,
    false,
  ]);
  const [currentInput, setCurrentInput] = useState(0);

  const handlePinChange = (text: string, index: number) => {
    // Validate input to allow only numbers
    if (/^\d*$/.test(text) && text.length <= 1) {
      const newPin = [...pin];
      newPin[index] = text;
      setPin(newPin);

      // Automatically move to the next input field if there's more input
      if (text.length === 1 && index < 3 && inputRefs[index + 1].current) {
        setCurrentInput(index + 1);
        inputRefs[index + 1].current?.focus();
      }

      // Update the digitEntered state for this input
      const newDigitEntered = [...digitEntered];
      newDigitEntered[index] = text.length === 1;
      setDigitEntered(newDigitEntered);
    }
  };

  useEffect(() => {
    // Reset the currentInput state when all inputs are filled
    if (pin.every((digit) => digit !== "")) {
      setCurrentInput(0);
      router.replace("/setpin-confirm");
    }
  }, [pin]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={{ paddingTop: 150 }}>
        <View style={styles.circle}>
          <Image
            style={styles.image}
            source={require("../../assets/images/auth/secret.png")}
          />
        </View>
      </View>
      <Text style={styles.verifyText}>Set your PIN</Text>
      <Text style={styles.descriptionText}>
        Set a 4-digit PIN to authorize your transactions and login to your
        account.
      </Text>
      <View style={styles.pinInputContainer}>
        {pin.map((digit, index) => (
          <TextInput
            key={index}
            style={[
              styles.pinInput,
              digitEntered[index] ? styles.blackBackground : null,
              index === currentInput ? styles.highlighted : null,
            ]}
            keyboardType="numeric"
            value={digitEntered[index] ? "*" : ""}
            onChangeText={(text) => handlePinChange(text, index)}
            ref={inputRefs[index]}
            maxLength={1}
            secureTextEntry={true} 
          />
        ))}
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
    width: 70,
    resizeMode: "contain",
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
  pinInputContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginBottom: 20,
  },
  pinInput: {
    width: 22,
    height: 22,
    borderRadius: 11, // Make it round
    borderWidth: 1,
    backgroundColor: "#FFFFFF",
    fontSize: 24,
    textAlign: "center",
    marginHorizontal: 4,
  },
  blackBackground: {
    backgroundColor: "#000000", // Black background color when a digit is entered
    color: "#000000", // Black text color on black background
  },
  highlighted: {
    borderColor: "#8140CF", // Highlighted border color
    borderWidth: 2, // Increase border width to highlight
  },
});

export default SetPin;
