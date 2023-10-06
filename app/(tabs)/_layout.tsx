import FontAwesome from "@expo/vector-icons/FontAwesome";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Link, Tabs } from "expo-router";
import { Image, Pressable, Text, useColorScheme } from "react-native";
import TabBarItem from "../../components/TabScreen/TabBarItem";
import { View } from "react-native";

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#8140CF",
        tabBarStyle: {
          backgroundColor: "#FEFEFE",
          height: 70,
          marginTop: 0,
          borderBlockStartColor: "#FFFFFF",
        },
        tabBarLabel: () => null,
      }}
    >
      <Tabs.Screen
        name="dashboard"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarItem
              name="home"
              color={color}
              focused={focused}
              iconLibrary="AntDesign"
            />
          ),
          headerTitle: "",
          headerTransparent: true,

          headerLeft: () => (
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
            >
              <Link href="/modal" asChild>
                <Pressable>
                  {({ pressed }) => (
                    <Image
                      style={{
                        width: 40,
                        height: 40,
                        resizeMode: "contain",
                        marginLeft: 15,
                        opacity: pressed ? 0.5 : 1,
                      }}
                      source={require("../../assets/images/dashboard/profilePic.png")}
                    />
                  )}
                </Pressable>
              </Link>
              <Text style={{ fontSize: 18, fontWeight: "400" }}>
                Hi Ademola
              </Text>
            </View>
          ),
          headerRight: () => (
            <Link href="/dashboard" asChild>
              <Pressable>
                {({ pressed }) => (
                  <Image
                    style={{
                      width: 24,
                      height: 24,
                      resizeMode: "contain",
                      marginRight: 15,
                      opacity: pressed ? 0.5 : 1,
                    }}
                    source={require("../../assets/images/dashboard/notification.png")}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="transaction"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarItem
              name="exchange"
              color={color}
              focused={focused}
              iconLibrary="FontAwesome"
            />
          ),
          headerTitle: "",
          headerTransparent: true,

          headerLeft: () => (
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
            >
              <Text style={{ fontSize: 18, fontWeight: "700", marginLeft: 15 }}>
                Transactions
              </Text>
            </View>
          ),
          headerRight: () => (
            <Link href="/dashboard" asChild>
              <Pressable>
                {({ pressed }) => (
                  <Image
                    style={{
                      width: 24,
                      height: 24,
                      resizeMode: "contain",
                      marginRight: 15,
                      opacity: pressed ? 0.5 : 1,
                    }}
                    source={require("../../assets/images/dashboard/notification.png")}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="reward"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarItem
              name="trophy"
              color={color}
              focused={focused}
              iconLibrary="EvilIcons"
            />
          ),
          headerTitle: "",
          headerTransparent: true,

          headerLeft: () => (
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
            >
              <Text style={{ fontSize: 18, fontWeight: "700", marginLeft: 15 }}>
                Reward
              </Text>
            </View>
          ),
          headerRight: () => (
            <Link href="/dashboard" asChild>
              <Pressable>
                {({ pressed }) => (
                  <Image
                    style={{
                      width: 24,
                      height: 24,
                      resizeMode: "contain",
                      marginRight: 15,
                      opacity: pressed ? 0.5 : 1,
                    }}
                    source={require("../../assets/images/dashboard/notification.png")}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarItem
              name="person-circle-outline"
              color={color}
              focused={focused}
              iconLibrary="Ionicons"
            />
          ),

          headerBackground: () => (
            <Image
              style={{
                width: "100%",
                height: 280,
              }}
              source={require("../../assets/images/profile/headbg.png")}
            />
          ),
          headerTitleAlign: "center",
          headerTitle: () => (
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                style={{
                  width: 80,
                  height: 80,
                  marginTop: 250,
                }}
                source={require("../../assets/images/dashboard/profilePic.png")}
              />
              <View
                style={{
                  gap: 5,
                  marginTop: 5,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{ fontSize: 18, fontWeight: "bold", color: "white" }}
                >
                  Ademola Adeniyi
                </Text>
                <Text
                  style={{ fontSize: 14, fontWeight: "400", color: "#E7E7E7" }}
                >
                  @demscr3ations
                </Text>
              </View>
            </View>
          ),
          headerLeft: () => (
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
            >
              <Text
                style={{
                  fontSize: 20,
                  color: "#FEFEFE",
                  fontWeight: "bold",
                  marginLeft: 15,
                }}
              >
                Profile
              </Text>
            </View>
          ),
          headerRight: () => (
            <Link href="/dashboard" asChild>
              <Pressable>
                {({ pressed }) => (
                  <Image
                    style={{
                      width: 24,
                      height: 24,
                      resizeMode: "contain",
                      marginRight: 15,
                      opacity: pressed ? 0.5 : 1,
                    }}
                    source={require("../../assets/images/profile/notification.png")}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
    </Tabs>
  );
}
