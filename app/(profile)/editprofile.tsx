import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

import { FontAwesome5 } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";

const AirtimeAndData: React.FC = () => {
  const [firstName, setFirstName] = useState<string>("Esan");
  const [lastName, setLastName] = useState<string>("Damilola");
  const [email, setEmail] = useState<string>("damilola@gmail.com");
  const [mobileNumber, setMobileNumber] = useState<string>("+234 ");
  const [gender, setGender] = useState<string>("Male");
  const [username, setUsername] = useState<string>("ionikdev");

  const renderInputWithIcon = (
    placeholder: string,
    value: string,
    onChangeText: (text: string) => void,
    icon: string,
    keyboardType: "default" | "numeric" = "default"
  ) => (
    <View style={styles.inputContainer}>
      <View style={styles.labelContainer}>
        {value ? (
          <Text style={styles.label}>{placeholder}</Text>
        ) : (
          <Text style={styles.placeholder}>{placeholder}</Text>
        )}
      </View>
      <TextInput
        style={styles.input}
        placeholder=""
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
      />
      <View style={styles.iconContainer}>
        <FontAwesome5 name={icon} size={24} color="#888" style={styles.icon} />
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <StatusBar style="auto" />
        {renderInputWithIcon("First Name", firstName, setFirstName, "user")}
        {renderInputWithIcon("Last Name", lastName, setLastName, "user")}
        {renderInputWithIcon("Email", email, setEmail, "envelope")}
        {renderInputWithIcon(
          "Mobile Number",
          mobileNumber,
          setMobileNumber,
          "phone",
          "numeric"
        )}
        {renderInputWithIcon("Gender", gender, setGender, "venus-mars")}
        {renderInputWithIcon("Username", username, setUsername, "user")}

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
      </ScrollView>
    </SafeAreaView>
  );
};

export default AirtimeAndData;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#FEFEFE",
    paddingHorizontal: 15,
    paddingTop: 80,
  },
  saveedit: {
    width: 320,
    backgroundColor: "#8140CF",
    padding: 20,
    borderRadius: 32,
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 12,
    paddingLeft: 10,
    marginBottom: 20,
  },
  labelContainer: {
    position: "absolute",
    top: 0,
    left: 10,
  },
  label: {
    color: "#888",
  },
  placeholder: {
    color: "#888",
    alignSelf: "center",
  },
  iconContainer: {
    marginLeft: 10,
    padding: 10,
  },
  icon: {},
  input: {
    flex: 1,
    height: 66,
    fontSize: 16,
    fontWeight: "700",
    paddingLeft: 10,
  },
});
