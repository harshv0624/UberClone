import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import LoginScreen from '../Screens/LoginScreen'
import OtpVerificationScreen from '../Screens/OtpVerificationScreen'

const RootNavigation = () => {
    const stack=createStackNavigator()
  return (
    <NavigationContainer>
        <stack.Navigator>
            <stack.Screen name='Login' component={LoginScreen} options={{headerShown:false}}/>
            <stack.Screen name='OtpVerify' component={OtpVerificationScreen} options={{headerShown:false}}/>
        </stack.Navigator>
    </NavigationContainer>
  )
}

export default RootNavigation

const styles = StyleSheet.create({})