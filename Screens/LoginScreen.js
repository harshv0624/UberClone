import {
  Image,
  Platform,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
const LoginScreen = () => {
  return (
    <SafeAreaView
      style={{
        marginTop: Platform.OS == "android" ? 30 : 0,
        flex: 1,
        backgroundColor: "#fff",
      }}
    >
      <View style={{ marginHorizontal: 20, marginVertical: 20 }}>
        <Text style={{ fontWeight: "500", fontSize: 22 }}>
          Enter your mobile number
        </Text>

        <View
          style={{
            flexDirection: "row",
            height: 50,
            width: "100%",
            justifyContent: "space-between",
            marginTop: 20,
          }}
        >
          <Pressable
            style={{
              backgroundColor: "#eeeeee",
              flexDirection: "row",
              padding: 10,
              width: 100,
              alignItems: "center",
              justifyContent: "space-between",
              borderRadius: 10,
            }}
          >
            <Image
              source={require("../assets/flag.jpg")}
              style={{ width: 50, height: 50 }}
            />
            <Entypo name="triangle-down" size={20} color="black" />
          </Pressable>
          <Pressable
            style={{
              backgroundColor: "#eeeeee",
              width: 250,
              marginLeft: 10,
              flexDirection: "row",
              alignItems: "center",
              borderRadius: 10,
              padding: 10,
              justifyContent: "space-between",
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={{ fontSize: 18 }}>+91</Text>
              <TextInput
                placeholder="Moblie number"
                style={{ marginLeft: 5, fontSize: 18 }}
                keyboardType="number-pad"
              />
            </View>
            <View style={{ marginRight: 5 }}>
              <FontAwesome5 name="user-lock" size={22} color="black" />
            </View>
          </Pressable>
        </View>

        <Pressable
          style={{
            alignSelf: "center",
            backgroundColor: "black",
            marginTop: 20,
            padding: 10,
            width: "100%",
            alignItems: "center",
            borderRadius: 10,
          }}
        >
          <Text style={{ color: "#fff", fontWeight: "500", fontSize: 18 }}>
            Continue
          </Text>
        </Pressable>

        <View
          style={{ flexDirection: "row", marginTop: 30, alignItems: "center" }}
        >
          <View
            style={{ backgroundColor: "#eeeeee", height: 5, width: "45%" }}
          ></View>
          <Text
            style={{
              fontSize: 18,
              width: "10%",
              alignSelf: "center",
              textAlign: "center",
            }}
          >
            or
          </Text>
          <View
            style={{ backgroundColor: "#eeeeee", height: 5, width: "45%" }}
          ></View>
        </View>

        <View style={{ marginTop: 20, gap: 15 }}>
          <Pressable
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#eeeeee",
              borderRadius: 10,
              padding: 15,
              justifyContent: "center",
              height: 60,
            }}
          >
            <Image
              source={require("../assets/appleLogo.png")}
              style={{ width: 25, height: 25 }}
            />
            <Text style={{ fontSize: 18, fontWeight: "600", marginLeft: 10 }}>
              Continue with Apple
            </Text>
          </Pressable>

          <Pressable
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#eeeeee",
              borderRadius: 10,
              justifyContent: "center",
              padding: 15,
              height: 60,
            }}
          >
            <Image
              source={require("../assets/fbLogo.png")}
              style={{ width: 35, height: 35 }}
            />
            <Text style={{ fontWeight: "600", fontSize: 18, marginLeft: 10 }}>
              Continue with Facebook
            </Text>
          </Pressable>

          <Pressable
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#eeeeee",
              borderRadius: 10,
              height: 60,
              padding: 15,
              justifyContent: "center",
            }}
          >
            <Image
              source={require("../assets/googleLogo.png")}
              style={{ width: 30, height: 30 }}
            />
            <Text style={{ marginLeft: 10, fontWeight: "600", fontSize: 18 }}>
              Continue with Google
            </Text>
          </Pressable>

          <Pressable
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#eeeeee",
              borderRadius: 10,
              height: 60,
              justifyContent: "center",
              padding: 15,
            }}
          >
            <MaterialIcons name="email" size={25} color="black" />
            <Text style={{ marginLeft: 10, fontSize: 18, fontWeight: "600" }}>
              Continue with Email
            </Text>
          </Pressable>
        </View>

        <View
          style={{ flexDirection: "row", marginTop: 30, alignItems: "center" }}
        >
          <View
            style={{ backgroundColor: "#eeeeee", height: 5, width: "45%" }}
          ></View>
          <Text
            style={{
              fontSize: 18,
              width: "10%",
              alignSelf: "center",
              textAlign: "center",
            }}
          >
            or
          </Text>
          <View
            style={{ backgroundColor: "#eeeeee", height: 5, width: "45%" }}
          ></View>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            alignSelf: "center",
            marginTop: 20,
            gap: 10,
          }}
        >
          <Ionicons name="search" size={25} color="black" />
          <Text style={{ fontSize: 18, fontWeight: "700" }}>
            Find my account
          </Text>
        </View>

        <Text
          style={{
            fontSize: 13,
            color: "gray",
            marginTop: 15,
            textAlign: "justify",
          }}
        >
          By proceeding, you consent to get calls, WhatsApp or SMS
          messages,including by automated means, from Uber and it affiliates to
          the number provided
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
