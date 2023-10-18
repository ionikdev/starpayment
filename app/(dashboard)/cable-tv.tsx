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
  BottomSheetScrollView,
} from "@gorhom/bottom-sheet";
import Icon from "react-native-vector-icons/FontAwesome";
import * as Animatable from "react-native-animatable";
import { Link } from "expo-router";
import { styles } from "../../styles/cabletv";

const datas = [
  { name: "DSTV", icon: require("../../assets/icons/dstv.png") },
  { name: "GOTV", icon: require("../../assets/icons/gotv.png") },
  { name: "Startimes", icon: require("../../assets/icons/startime.png") },
  { name: "Showmax", icon: require("../../assets/icons/showmax.png") },
];
const plans = [
  { id: 1, period: "DSTV Yanga", amount: "NGN3500,00" },
  { id: 2, period: "DSTV Confam", amount: "890,00" },
  { id: 3, period: "DSTV Padi", amount: "100,00" },
  { id: 4, period: "DSTV Compact", amount: "650,00" },
  { id: 5, period: "DSTV Compact Plus", amount: "800,00" },
  { id: 6, period: "DSTV Premium", amount: "650,00" },
  { id: 7, period: "DSTV Yakata", amount: "800,00" },
  { id: 8, period: "DSTV 3Tplan", amount: "650,00" },
];

const amountOptions = ["200", "500", "750", "1000", "2000"];

const CableTV = () => {
  const inputRefs = Array.from({ length: 4 }, () => createRef<TextInput>());
  const [selectedCableTv, setSelectedCableTv] = useState("");
  const [selectedPlan, setSelectedPlan] = useState("");
  const [dataModalVisible, setdataModalVisible] = useState(false);
  const [decoderNumber, setDecoderNumber] = useState("");
  const [selectedAmount, setSelectedAmount] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [filteredPlans, setFilteredPlans] = useState(plans);
  const bottomSheetRef = useRef<BottomSheetModal | null>(null);
  const paymentConfirmationSheetRef = useRef<BottomSheetModal | null>(null);
  const selectPlanSheetRef = useRef<BottomSheetModal | null>(null);
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

  const opendataModal = () => {
    bottomSheetRef.current?.present();
  };

  const openPaymentConfirmationModal = () => {
    setModalVisible(false);
    paymentConfirmationSheetRef.current?.present();
  };
  const openSelectPlanModal = () => {
    selectPlanSheetRef.current?.present();
  };

  const selectPlan = (plan: string) => {
    // Find the selected plan object from the plans data
    const selectedPlanData = plans.find((data) => data.period === plan);

    if (selectedPlanData) {
      // Set the selected plan and its corresponding amount
      setSelectedPlan(plan);
      setSelectedAmount(selectedPlanData.amount);
    }

    selectPlanSheetRef.current?.dismiss();
  };

  const selectdata = (data: string) => {
    setSelectedCableTv(data);
    setdataModalVisible(false);
    bottomSheetRef.current?.dismiss();
  };
  //   const selectplandata = (data: string) => {
  //     setSelectedPlanData(data);
  //     setdataModalVisible(false);
  //     bottomSheetRef.current?.dismiss();
  //   };

  const handleAmountChange = (amount: string) => {
    setSelectedAmount(amount);
  };

  const handleBuydata = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    paymentConfirmationSheetRef.current?.dismiss();
  };

  const closeModalPin = () => {
    setPin(["", "", "", ""]);
    setDigitEntered([false, false, false, false]);
    setCurrentInput(0);
    setSignUpSuccess(false); // Reset sign-up success
    setModalPinVisible(false);
  };

  const handlePinChange = (text: string, index: number) => {
    if (/^\d*$/.test(text) && text.length <= 1) {
      const newPin = [...pin];
      newPin[index] = text;
      setPin(newPin);

      if (text.length === 1) {
        // Check if we are not at the last digit
        if (index < 3) {
          // Move focus to the next input
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

  const handlePlanSearch = (searchText: any) => {
    const filtered = plans.filter((plan) =>
      plan.period.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredPlans(filtered);
  };

  return (
    <BottomSheetModalProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.inputContainer}>
          <TouchableOpacity
            style={[styles.airtimeInputContainer, { borderBottomWidth: 1 }]}
            onPress={opendataModal}
          >
            <TextInput
              placeholder="Select Biller Type"
              placeholderTextColor="#989898"
              accessible={true}
              accessibilityLabel="Select Biller Type"
              value={selectedCableTv}
              editable={false}
            />

            <Icon name="caret-down" size={20} color="#9E9E9E" />
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.airtimeInputContainer, { borderBottomWidth: 1 }]}
            onPress={openSelectPlanModal}
          >
            <TextInput
              placeholder="Select Plan"
              placeholderTextColor="#989898"
              accessible={true}
              accessibilityLabel="Select Plan"
              value={selectedPlan}
              editable={false}
            />

            <Icon name="caret-down" size={20} color="#9E9E9E" />
          </TouchableOpacity>

          <TextInput
            style={[styles.mobileNumberInput, { borderBottomWidth: 1 }]}
            placeholder="Enter Decoder Number"
            placeholderTextColor="#989898"
            keyboardType="phone-pad"
            accessible={true}
            accessibilityLabel="Enter Decoder Number"
            onChangeText={(text) => setDecoderNumber(text)}
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
              editable={selectedAmount === ""}
            />
          </View>
        </View>

        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          style={styles.amountScrollView}
        >
          {/* {amountOptions.map((amount, index) => (
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
          ))} */}
        </ScrollView>
        <View style={styles.buyButtonContainer}>
          <TouchableOpacity style={styles.buyButton} onPress={handleBuydata}>
            <Text style={styles.buyButtonText}>Pay ₦{selectedAmount} </Text>
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
              <Text style={styles.modalText}>REVIEW TRANSACTION</Text>
              <View style={styles.modalDetailRow}>
                <Text style={styles.modalDetailLabel}>Biller type:</Text>
                <Text style={styles.modalDetailValue}>{selectedCableTv}</Text>
              </View>
              <View style={styles.modalDetailRow}>
                <Text style={styles.modalDetailLabel}>Bill plan:</Text>
                <Text style={styles.modalDetailValue}>{selectedPlan} </Text>
              </View>
              <View style={styles.modalDetailRow}>
                <Text style={styles.modalDetailLabel}>Decoder number:</Text>
                <Text style={styles.modalDetailValue}>{decoderNumber}</Text>
              </View>
              <View style={styles.modalDetailRow}>
                <Text style={styles.modalDetailLabel}>Name on decoder:</Text>
                <Text style={styles.modalDetailValue}>ADEMOLA ADENIYI</Text>
              </View>
              <View style={styles.modalDetailRow}>
                <Text style={styles.modalDetailLabel}>Cost:</Text>
                <Text style={styles.modalDetailValue}>₦{selectedAmount}</Text>
              </View>
              <View style={styles.modalDetailRow}>
                <Text style={styles.modalDetailLabel}>Total cost:</Text>
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
        {/* onPaymentSuccess */}
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
                {selectedCableTv} plan on {decoderNumber} now.
              </Text>
              <Link href="/dashboard" asChild>
                <TouchableOpacity style={styles.bottomButtonReset}>
                  <Text style={styles.buttonText}>Continue</Text>
                </TouchableOpacity>
              </Link>
              {/* <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity> */}
            </View>
          </View>
        </Modal>

        <BottomSheetModal
          ref={bottomSheetRef}
          snapPoints={["55%", "75%", "90%"]}
          backdropComponent={(props) => (
            <BottomSheetBackdrop {...props} enableTouchThrough={true} />
          )}
        >
          <View style={styles.bottomSheetContent}>
            <Text style={styles.bottomSheetHeading}>BILLER TYPE</Text>

            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={{ fontWeight: "bold", fontSize: 20 }}>Box</Text>
                <Text>Off</Text>
              </View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={{ fontWeight: "bold", fontSize: 24 }}>Box</Text>
                <Text>Office</Text>
              </View>
            </View>
            {datas.map((data) => (
              <TouchableOpacity
                key={data.name}
                style={styles.airtimeOption}
                onPress={() => selectdata(data.name)}
              >
                <View style={styles.airtimeRow}>
                  <Image style={styles.actionIcon} source={data.icon} />
                  <Text style={styles.airtimeOptionText}>{data.name}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </BottomSheetModal>

        {/* Select Plan */}
        <BottomSheetModal
          ref={selectPlanSheetRef}
          snapPoints={["75%", "85%", "90%"]}
          backdropComponent={(props) => (
            <BottomSheetBackdrop {...props} enableTouchThrough={true} />
          )}
        >
          <Text style={styles.bottomSheetHeading}>Select Plan</Text>
          <View style={styles.searchContainer}>
            <Icon
              name="search"
              size={20}
              color="#333"
              style={styles.searchIcon}
            />
            <TextInput
              style={styles.searchInput}
              placeholder="Search for plans"
              placeholderTextColor="#989898"
              onChangeText={(text) => handlePlanSearch(text)}
            />
          </View>
          <BottomSheetScrollView style={styles.bottomSheetContent}>
            {filteredPlans.map((data) => (
              <TouchableOpacity
                key={data.id}
                style={styles.airtimeOption}
                onPress={() => selectPlan(data.period)}
              >
                <View
                  style={{ borderBottomWidth: 1, borderBottomColor: "#F6F6F6" }}
                >
                  {/* <Image style={styles.actionIcon} source={data.icon} /> */}
                  <Text style={styles.airtimeOptionText}>{data.period}</Text>
                  <Text style={{}}>₦{data.amount}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </BottomSheetScrollView>
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
                    // Handle backspace key press here
                    handleBackspace(index);
                  }
                }}
              />
            ))}
          </View>
          {/* <TouchableOpacity
            onPress={() => {
              modalPinVisible;
              paymentConfirmationSheetRef.current?.dismiss();
              // Close the payment confirmation modal after confirming payment
            }}
          >
            <Text>Confirm Payment</Text>
          </TouchableOpacity> */}
        </BottomSheetModal>
      </SafeAreaView>
    </BottomSheetModalProvider>
  );
};

export default CableTV;
