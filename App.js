import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import RootNavigation from "./Navigation/RootNavigation";
import Modal, { ModalPortal } from "react-native-modals";

export default function App() {
  return (
    <>
      <RootNavigation />
      <ModalPortal />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
