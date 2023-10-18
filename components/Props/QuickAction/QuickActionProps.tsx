import React, { useState, useRef, createRef } from "react";
import {
  Text,
  View,
  TextInput,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
  Modal,
} from "react-native";
import {
  BottomSheetModal,
  BottomSheetBackdrop,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import Icon from "react-native-vector-icons/FontAwesome";
import * as Animatable from "react-native-animatable";
import { Link } from "expo-router";
import { styles } from "../../../styles/airtime-data";

// Define a prop interface for customization
interface AirtimeProps {
  title: string;
  // Define other props needed for customization here
}

const airtimes = [
  { name: "GLO", icon: require("../../../assets/icons/glo.png") },
  { name: "MTN", icon: require("../../../assets/icons/mtn.png") },
  { name: "Airtel", icon: require("../../../assets/icons/airtel.png") },
  { name: "9mobile", icon: require("../../../assets/icons/9mobile.png") },
];

const amountOptions = ["200", "500", "750", "1000", "2000"];

const Airtime: React.FC<AirtimeProps> = ({ title }) => {
  const inputRefs = Array.from({ length: 4 }, () => createRef<TextInput>());
  const [selectedAirtime, setSelectedAirtime] = useState("");
  const [selectedAmount, setSelectedAmount] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [airtimeModalVisible, setAirtimeModalVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const bottomSheetRef = useRef<BottomSheetModal | null>(null);
  const [confirmPaymentVisible, setConfirmPaymentVisible] = useState(false);
  const paymentConfirmationSheetRef = useRef<BottomSheetModal | null>(null);
  const [pin, setPin] = useState(["", "", "", ""]);
  const [digitEntered, setDigitEntered] = useState([
    false,
    false,
    false,
    false,
  ]);
  const [currentInput, setCurrentInput] = useState(0);
  const [modalPinVisible, setModalPinVisible] = useState(false);
  const [signUpSuccess, setSignUpSuccess] = useState(false);

  const openAirtimeModal = () => {
    bottomSheetRef.current?.present();
  };

  const selectAirtime = (airtime: string) => {
    setSelectedAirtime(airtime);
    setAirtimeModalVisible(false);
    bottomSheetRef.current?.dismiss();
  };

  const handleAmountChange = (amount: string) => {
    setSelectedAmount(amount);
  };

  const handleBuyAirtime = () => {
    setModalVisible(true);
  };

  const openPaymentConfirmationModal = () => {
    setModalVisible(false);
    paymentConfirmationSheetRef.current?.present();
  };

  const closeModal = () => {
    setModalVisible(false);
    paymentConfirmationSheetRef.current?.dismiss();
  };

  const closeModalPin = () => {
    setPin(["", "", "", ""]);
    setDigitEntered([false, false, false, false]);
    setCurrentInput(0);
    setSignUpSuccess(false);
    setModalPinVisible(false);
  };

  const handlePinChange = (text: string, index: number) => {
    if (/^\d*$/.test(text) && text.length <= 1) {
      const newPin = [...pin];
      newPin[index] = text;
      setPin(newPin);

      if (text.length === 1) {
        if (index < 3) {
          inputRefs[index + 1].current?.focus();
          setCurrentInput(index + 1);
        }
      }

      const newDigitEntered = [...digitEntered];
      newDigitEntered[index] = text.length === 1;
      setDigitEntered(newDigitEntered);

      if (index === 3 && newDigitEntered.every((entered) => entered)) {
        setSignUpSuccess(true);
        setTimeout(() => {
          setModalPinVisible(true);
        }, 1000);
      }
    }
  };

  const handleBackspace = (index: number) => {
    if (index > 0) {
      const newDigitEntered = [...digitEntered];
      newDigitEntered[index] = false;
      setDigitEntered(newDigitEntered);

      const newPin = [...pin];
      newPin[index] = "";
      setPin(newPin);
      setCurrentInput(index - 1);
      inputRefs[index - 1].current?.focus();
    }
  };

  return (
    <BottomSheetModalProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.inputContainer}>
          <TouchableOpacity
            style={[styles.airtimeInputContainer, { borderBottomWidth: 1 }]}
            onPress={openAirtimeModal}
          >
            <TextInput
              placeholder="Select Provider"
              placeholderTextColor="#989898"
              accessible={true}
              accessibilityLabel="Select Provider"
              value={selectedAirtime}
              editable={false}
            />

            <Icon name="caret-down" size={20} color="#9E9E9E" />
          </TouchableOpacity>

          <TextInput
            style={[styles.mobileNumberInput, { borderBottomWidth: 1 }]}
            placeholder="Mobile Number"
            placeholderTextColor="#989898"
            keyboardType="phone-pad"
            accessible={true}
            accessibilityLabel="Mobile Number"
            onChangeText={(text) => setMobileNumber(text)}
          />

          <View style={[styles.amountInputContainer, { borderBottomWidth: 1 }]}>
            <Text style={styles.nairaSymbol}>₦</Text>
            <TextInput
              style={styles.amountTextInput}
              placeholder="Amount"
              placeholderTextColor="#989898"
              keyboardType="phone-pad"
              accessible={true}
              accessibilityLabel="Amount"
              value={selectedAmount}
              onChangeText={(text) => setSelectedAmount(text)}
            />
          </View>
        </View>

        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          style={styles.amountScrollView}
        >
          {amountOptions.map((amount, index) => (
            <TouchableOpacity
              key={amount}
              style={[
                styles.amountOption,
                index !== amountOptions.length - 1 && styles.amountOptionGap,
              ]}
              onPress={() => handleAmountChange(amount)}
            >
              <Text style={styles.amountOptionText}>₦{amount}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
        <View style={styles.buyButtonContainer}>
          <TouchableOpacity style={styles.buyButton} onPress={handleBuyAirtime}>
            <Text style={styles.buyButtonText}>
              Buy ₦{selectedAmount} Airtime
            </Text>
          </TouchableOpacity>
        </View>

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={closeModal}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalText}>{title}</Text>
              <View style={styles.modalDetailRow}>
                <Text style={styles.modalDetailLabel}>Network provider:</Text>
                <Text style={styles.modalDetailValue}>{selectedAirtime}</Text>
              </View>
              <View style={styles.modalDetailRow}>
                <Text style={styles.modalDetailLabel}>Mobile Number:</Text>
                <Text style={styles.modalDetailValue}>{mobileNumber} </Text>
              </View>
              <View style={styles.modalDetailRow}>
                <Text style={styles.modalDetailLabel}>Amount:</Text>
                <Text style={styles.modalDetailValue}>₦{selectedAmount}</Text>
              </View>
              <View style={styles.modalDetailRow}>
                <Text style={styles.modalDetailLabel}>Total:</Text>
                <Text style={[styles.modalDetailValue, { color: "#8140CF" }]}>
                  ₦{selectedAmount}
                </Text>
              </View>

              <TouchableOpacity
                style={styles.bottomButtonReset}
                onPress={openPaymentConfirmationModal}
              >
                <Text style={styles.buttonText}>Continue</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
                <Text style={styles.closeButtonText}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalPinVisible}
          onRequestClose={closeModalPin}
        >
          <View style={styles.modalContainerPin}>
            <View style={styles.modalContentPin}>
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
              <Text style={styles.modalText}>Purchase completed!</Text>
              <Text style={styles.modalSubText}>
                Your have successfully purchased a {selectedAmount}{" "}
                {selectedAirtime} airtime on {mobileNumber} now.
              </Text>
              <Link href="/dashboard" asChild>
                <TouchableOpacity style={styles.bottomButtonReset}>
                  <Text style={styles.buttonText}>Continue</Text>
                </TouchableOpacity>
              </Link>
              {/* <TouchableOpacity
                onPress={closeModal}
                style={styles.closeButton}
              >
                <Text style={styles.closeButtonText}>Close</Text>
              </TouchableOpacity> */}
            </View>
          </View>
        </Modal>

        <BottomSheetModal
          ref={bottomSheetRef}
          snapPoints={["75%", "85%", "90%"]}
          backdropComponent={(props) => (
            <BottomSheetBackdrop {...props} enableTouchThrough={true} />
          )}
        >
          <View style={styles.bottomSheetContent}>
            <Text style={styles.bottomSheetHeading}>Provider</Text>
            {airtimes.map((airtime) => (
              <TouchableOpacity
                key={airtime.name}
                style={styles.airtimeOption}
                onPress={() => selectAirtime(airtime.name)}
              >
                <View style={styles.airtimeRow}>
                  <Image style={styles.actionIcon} source={airtime.icon} />
                  <Text style={styles.airtimeOptionText}>{airtime.name}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </BottomSheetModal>

        {/* Payment Confirmation Modal */}
        <BottomSheetModal
          ref={paymentConfirmationSheetRef}
          snapPoints={["75%", "85%", "90%"]}
          backdropComponent={(props) => (
            <BottomSheetBackdrop {...props} enableTouchThrough={true} />
          )}
        >
          <Text style={styles.verifyText}>Enter Your PIN</Text>
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
                onKeyPress={({ nativeEvent }) => {
                  if (nativeEvent.key === "Backspace") {
                    handleBackspace(index);
                  }
                }}
              />
            ))}
          </View>
        </BottomSheetModal>
      </SafeAreaView>
    </BottomSheetModalProvider>
  );
};

export default Airtime;
