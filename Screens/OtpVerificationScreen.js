import {
  Platform,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import { OtpInput } from "react-native-otp-entry";
import { AntDesign } from "@expo/vector-icons";
import { BottomModal, ModalContent, SlideAnimation } from "react-native-modals";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

const OtpVerificationScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation=useNavigation()
  return (
    <>
      <SafeAreaView
        style={{
          marginTop: Platform.OS == "android" ? 20 : 0,
          flex: 1,
          backgroundColor: "#fff",
        }}
      >
        <View style={{ marginHorizontal: 20, marginVertical: 20 }}>
          <Text style={{ fontSize: 22, fontWeight: "600" }}>
            Welcome Back !
          </Text>
          <Text style={{ fontSize: 17, marginTop: 10 }}>
            Enter the 4-digit code sent to your number at 123456799
          </Text>

          <Text
            style={{
              fontSize: 17,
              marginTop: 30,
              textDecorationStyle: "solid",
              textDecorationLine: "underline",
              fontWeight: "500",
            }}
          >
            Changed your mobile number?
          </Text>

          <OtpInput
            numberOfDigits={4}
            focusColor="black"
            focusStickBlinkingDuration={500}
            onTextChange={(text) => console.log(text)}
            onFilled={(text) => console.log(`OTP is ${text}`)}
            theme={{
              containerStyle: styles.container,
              inputsContainerStyle: styles.inputsContainerStyle,
              pinCodeContainerStyle: styles.pinCodeContainerStyle,
              pinCodeTextStyle: styles.pinCodeText,
              focusStickStyle: styles.focusStick,
              focusedPinCodeContainerStyle: styles.activePinCodeContainer,
            }}
          />

          <View style={{ marginTop: 40 }}>
            <Pressable
              style={{
                backgroundColor: "#eeeeee",
                width: "55%",
                padding: 10,
                borderRadius: 20,
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 17, fontWeight: "500" }}>
                Send code Via Email
              </Text>
            </Pressable>

            <Pressable
              style={{
                backgroundColor: "#eeeeee",
                width: "40%",
                padding: 10,
                borderRadius: 30,
                alignItems: "center",
                marginTop: 12,
              }}
              onPress={() => setModalVisible(true)}
            >
              <Text style={{ fontSize: 17, fontWeight: "500" }}>
                More options
              </Text>
            </Pressable>
          </View>

          <View
            style={{
              position: "relative",
              backgroundColor: "#fff",
              top: "92%",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Pressable
              style={{
                backgroundColor: "#eeeeee",
                padding: 10,
                borderRadius: 50,
              }}
              onPress={()=>navigation.goBack()}
            >
              <AntDesign name="arrowleft" size={30} color="black" />
            </Pressable>

            <Pressable
              style={{
                flexDirection: "row",
                justifyContent: "center",
                gap: 6,
                backgroundColor: "#eeeeee",
                borderRadius: 100,
                width: 100,
                height: 50,
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 20 }}>Next</Text>
              <AntDesign
                name="arrowright"
                size={28}
                color="black"
                style={{ marginTop: 4 }}
              />
            </Pressable>
          </View>
        </View>
      </SafeAreaView>

      <BottomModal
        modalAnimation={
          new SlideAnimation({
            slideFrom: "bottom",
          })
        }
        onHardwareBackPress={() => setModalVisible(!modalVisible)}
        onTouchOutside={() => setModalVisible(!modalVisible)}
        swipeDirection={["up", "down"]}
        swipeThreshold={200}
        visible={modalVisible}
        onBackDropPress={() => setModalVisible(!modalVisible)}
      >
        <ModalContent>
          <View style={{ height: 250 }}>
            <View
              style={{
                borderBottomWidth: 2,
                borderBlockColor: "#eeeeee",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "600",
                  marginBottom: 20,
                  left: 120,
                }}
              >
                More Options
              </Text>

              <Pressable onPress={() => setModalVisible(false)}>
                <AntDesign
                  name="close"
                  size={20}
                  color="black"
                  style={{ marginTop: 6 }}
                />
              </Pressable>
            </View>

            <View style={{ marginHorizontal: 20 }}>
              <Text style={{ marginTop: 15, fontWeight: "700", fontSize: 20 }}>
                Choose another way to verify
              </Text>

              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 15,
                  marginTop: 30,
                }}
              >
                <View style={{ marginBottom: 10 }}>
                  <FontAwesome5 name="whatsapp" size={26} color="black" />
                </View>
                <Pressable
                  style={{ borderColor: "#eeeeee", borderBottomWidth: 2,width:'95%' }}
                >
                  <Text
                    style={{
                      fontWeight: "500",
                      fontSize: 17,
                      marginBottom: 10,
                    }}
                  >
                    Send code via WhatsApp
                  </Text>
                </Pressable>
                {/* <MaterialIcons name="phone-iphone" size={24} color="black" /> */}
              </View>

              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 15,
                  marginTop: 20,
                }}
              >
                <View style={{ marginBottom: 10 }}>
                <Entypo name="dots-three-horizontal" size={26} color="black" />
                </View>

                <Pressable
                  style={{ borderColor: "#eeeeee", borderBottomWidth: 2,width:'95%' }}
                >
                  <Text
                    style={{
                      fontWeight: "500",
                      fontSize: 17,
                      marginBottom: 10,
                    }}
                  >
                    Password
                  </Text>
                </Pressable>
                {/* <MaterialIcons name="phone-iphone" size={24} color="black" /> */}
              </View>

            </View>
          </View>
        </ModalContent>
      </BottomModal>
    </>
  );
};

export default OtpVerificationScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    width: 230,
  },

  inputsContainerStyle: {
    width: 10,
  },

  pinCodeContainerStyle: {
    width: 50,
    height: 50,
    backgroundColor: "#eeeeee",
  },

  activePinCodeContainer: {
    borderColor: "black",
    borderWidth: 2,
  },
});
