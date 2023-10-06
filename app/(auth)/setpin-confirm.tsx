import { Link } from "expo-router";
import React, { useState, createRef } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  Button,
  Modal,
  TouchableOpacity,
} from "react-native";
import * as Animatable from "react-native-animatable"; // Import Animatable
import Icon from "react-native-vector-icons/FontAwesome"; // You can choose a different icon library if you prefer

const SetPinConfirmation = () => {
  const inputRefs = Array.from({ length: 4 }, () => createRef<TextInput>());

  const [pin, setPin] = useState(["", "", "", ""]); // Initialize with four empty strings
  const [digitEntered, setDigitEntered] = useState([
    false,
    false,
    false,
    false,
  ]);
  const [currentInput, setCurrentInput] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [signUpSuccess, setSignUpSuccess] = useState(false); // Track sign-up success

  const handlePinChange = (text: string, index: number) => {
    if (/^\d*$/.test(text) && text.length <= 1) {
      const newPin = [...pin];
      newPin[index] = text;
      setPin(newPin);

      if (text.length === 1 && index < 3) {
        setCurrentInput(index + 1);
        inputRefs[index + 1].current?.focus();
      }

      const newDigitEntered = [...digitEntered];
      newDigitEntered[index] = text.length === 1;
      setDigitEntered(newDigitEntered);

      // Check if the last input has been entered
      if (index === 3 && newDigitEntered.every((entered) => entered)) {
        setSignUpSuccess(true); // Show checkmark animation
        setTimeout(() => {
          setModalVisible(true);
        }, 1000); // Show modal after a delay
      }
    }
  };

  const closeModal = () => {
    setPin(["", "", "", ""]);
    setDigitEntered([false, false, false, false]);
    setCurrentInput(0);
    setSignUpSuccess(false); // Reset sign-up success
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        {/* Center content vertically */}
        <View style={styles.centerContent}>
          <View style={styles.circle}>
            <Image
              style={styles.image}
              source={require("../../assets/images/auth/secret.png")}
            />
          </View>
          <Text style={styles.verifyText}>Confirm your PIN</Text>
        </View>
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

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={styles.checkmarkContainer}>
              <Animatable.View>
                <Animatable.View
                  animation={signUpSuccess ? "bounceIn" : undefined}
                  delay={signUpSuccess ? 500 : 0}
                  style={styles.checkmarkCircle}
                >
                  <Animatable.Text
                    delay={signUpSuccess ? 500 : 0}
                    animation={signUpSuccess ? "bounceIn" : undefined}
                    style={styles.checkmarkText}
                  >
                    <Icon name="check" size={66} color="#8140CF" />
                  </Animatable.Text>
                </Animatable.View>
              </Animatable.View>
            </View>
            <Text style={styles.modalText}>Sign up successful!</Text>
            <Text style={styles.modalSubText}>
              Your account has been successfully created.
            </Text>
            <Link href="/dashboard" asChild>
              <TouchableOpacity style={styles.bottomButtonReset}>
                <Text style={styles.buttonText}>Go to dashboard</Text>
              </TouchableOpacity>
            </Link>
            {/* <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity> */}
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FEFEFE",
    paddingHorizontal: 18,
  },
  centerContent: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 150,
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
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#FFFFFF",
    padding: 20,
    borderRadius: 20,
    alignItems: "center",
  },
  modalText: {
    fontSize: 20,
    fontWeight: "700",
    color: "#121212",
    marginBottom: 20,
  },
  modalSubText: {
    fontSize: 15,
    fontWeight: "700",
    textAlign: "center",
    color: "#616161",
    paddingHorizontal: 50,
    marginBottom: 50,
  },
  closeButton: {
    backgroundColor: "#8140CF",
    marginTop: 20,
    padding: 10,
    borderRadius: 10,
  },
  closeButtonText: {
    fontSize: 16,
    color: "#FFFFFF",
  },
  bottomButtonReset: {
    width: 327,
    backgroundColor: "#8140CF",
    padding: 15,
    borderRadius: 32,
    marginBottom:35,
    marginTop: 20,
  },
  buttonText: {
    color: "#FEFEFE",
    textAlign: "center",
    fontSize: 17,
  },
  checkmarkContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  checkmarkCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#EEE1FF", // Adjust the background color as needed
    alignItems: "center",
    justifyContent: "center",
  },
  checkmarkText: {
    fontSize: 36,
    color: "#8140CF", // Adjust the text color as needed
  },
});

export default SetPinConfirmation;
