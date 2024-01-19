import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "../Screens/LoginScreen";
import OtpVerificationScreen from "../Screens/OtpVerificationScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../Screens/HomeScreen";
import Services from "../Screens/Services";
import Activity from "../Screens/Activity";
import Account from "../Screens/Account";
import { Foundation } from "@expo/vector-icons";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const RootNavigation = () => {
  const stack = createStackNavigator();

  function BottomTabs() {
    const Tabs = createBottomTabNavigator();
    return (
      <Tabs.Navigator
        screenOptions={({ routes }) => ({
          tabBarHideOnKeyboard: true,
          tabBarStyle: { height: 70 },
        })}
      >
        <Tabs.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Foundation name="home" size={24} color="black" />
              ) : (
                <Foundation name="home" size={24} color="gray" />
              ),
            tabBarLabel: ({ focused }) =>
              focused ? (
                <Text style={{ marginBottom: 10, fontWeight: "500" }}>
                  Home
                </Text>
              ) : (
                <Text style={{ marginBottom: 10, color: "gray" }}>Home</Text>
              ),
          }}
        />
        <Tabs.Screen
          name="Services"
          component={Services}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <MaterialCommunityIcons name="dots-grid" size={24} color="black" />
              ) : (
                <MaterialCommunityIcons name="dots-grid" size={24} color="gray" />
              ),
            tabBarLabel: ({ focused }) =>
              focused ? (
                <Text style={{ marginBottom: 10, fontWeight: "500" }}>
                  Services
                </Text>
              ) : (
                <Text style={{ marginBottom: 10, color: "gray" }}>Services</Text>
              ),
          }}
        />
        <Tabs.Screen
          name="Activity"
          component={Activity}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <MaterialCommunityIcons name="bookmark" size={24} color="black" />
                ) : (
                  <Octicons name="bookmark" size={24} color="gray" />
                  ),
            tabBarLabel: ({ focused }) =>
              focused ? (
                <Text style={{ marginBottom: 10, fontWeight: "500" }}>
                  Activity
                </Text>
              ) : (
                <Text style={{ marginBottom: 10, color: "gray" }}>Activity</Text>
              ),
          }}
        />
        <Tabs.Screen
          name="Account"
          component={Account}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <FontAwesome name="user" size={24} color="black" />
              ) : (
                <FontAwesome name="user" size={24} color="gray" />
              ),
            tabBarLabel: ({ focused }) =>
              focused ? (
                <Text style={{ marginBottom: 10, fontWeight: "500" }}>
                  Account
                </Text>
              ) : (
                <Text style={{ marginBottom: 10, color: "gray" }}>Account</Text>
              ),
          }}
        />
      </Tabs.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <stack.Screen
          name="OtpVerify"
          component={OtpVerificationScreen}
          options={{ headerShown: false }}
        />
        <stack.Screen
          name="Tabs"
          component={BottomTabs}
          options={{ headerShown: false }}
        />
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;

const styles = StyleSheet.create({});
