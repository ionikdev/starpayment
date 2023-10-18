import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const options = [
  {
    id: 1,
    name: "Joseph Daramola",
    username: "@josephdaramola",
    image: require("../../assets/images/reward/jd.png"),
    position: "3",
  },
  {
    id: 2,
    name: "Chinedu Ezema",
    username: "@josephdaramola",
    image: require("../../assets/images/reward/jd.png"),
    position: "4",
  },
  {
    id: 3,
    name: "Theresa Victor",
    username: "@josephdaramola",
    image: require("../../assets/images/reward/jd.png"),
    position: "5",
  },
  {
    id: 4,
    name: "Oluchi Chinedu",
    username: "@josephdaramola",
    image: require("../../assets/images/reward/jd.png"),
    position: "6",
  },
  {
    id: 5,
    name: "Brittany Linda",
    username: "@josephdaramola",
    image: require("../../assets/images/reward/jd.png"),

    position: "7",
  },
  {
    id: 6,
    name: "Sandra Okanoluwa",
    username: "@josephdaramola",
    image: require("../../assets/images/reward/jd.png"),
    position: "8",
  },
];
const reward = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={{
          width: "100%",
          height: "45%",
          position: "absolute",
        }}
        source={require("../../assets/images/profile/headbg.png")}
      />
      <View style={styles.contentContainer}>
        <View>
          <Image
            style={{}}
            source={require("../../assets/icons/2ndwinner.png")}
          />

          <Text style={styles.winner}>NGN30,00.00</Text>
          <Text style={styles.winner}>@bashirtaslim</Text>
        </View>
        <View>
          <Image
            style={{ gap: 10, justifyContent: "center", alignItems: "center" }}
            source={require("../../assets/icons/winner.png")}
          />
          <View>
            <Text style={styles.winner}>NGN40,00.00</Text>
            <Text style={styles.winner}>@stevewonda</Text>
          </View>
        </View>
        <View>
          <Image
            style={{}}
            source={require("../../assets/icons/3rdwinner.png")}
          />
          <Text style={styles.winner}>NGN25,00.00</Text>
          <Text style={styles.winner}>@aishaaliyu</Text>
        </View>
      </View>
      <Text
        style={{
          marginTop: 70,
          fontSize: 25,
          fontWeight: "bold",
          color: "#000",
          textAlign: "center",
        }}
      >
        {" "}
        Top earners
      </Text>
      <ScrollView>
        {options.map((option, index) => {
          return (
            <TouchableOpacity key={option.id} style={styles.option}>
              <View
                style={{ flexDirection: "row", gap: 10, alignItems: "center" }}
              >
                <Image
                  style={{ width: 40, height: 40, resizeMode: "contain" }}
                  source={option.image}
                />

                <View>
                  <Text style={styles.optionText}>{option.name}</Text>
                  <Text style={styles.optionusername}>{option.username}</Text>
                </View>
              </View>
              <Text
                style={{
                  padding: 5,
                  paddingHorizontal: 8,
                  justifyContent: "center",
                  borderWidth: 1,
                  borderRadius: 10,
                  fontWeight: "bold",
                  fontSize: 14,
                }}
              >
                #{option.position}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default reward;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    backgroundColor: "#FEFEFE",
    paddingTop: 50,
  },
  contentContainer: {
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    gap: 35,
    marginTop: 0,
    paddingHorizontal: 15,
  },
  winner: {
    color: "#ffffff",
    fontWeight: "bold",
  },

  option: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 5,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderColor: "#E7E7E7",
    paddingHorizontal: 15,
  },
  icon: {
    marginHorizontal: 10,
  },
  optionText: {
    fontSize: 16,
    fontWeight: "700",
    flex: 1,
  },
  optionusername: {
    fontSize: 14,
    flex: 1,
  },
});
