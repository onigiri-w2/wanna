import React from "react";

import { Text, VStack } from "native-base";
import SafeAreaView from "react-native-safe-area-view";

import { MAIN_COLOR } from "@/styles/const";

import { Header } from "./components/Header";

export const SettingsPage = () => {
  return (
    <>
      <SafeAreaView
        style={{
          backgroundColor: MAIN_COLOR,
          flex: 1,
        }}
      >
        <VStack style={{ flex: 1 }}>
          <Header />
          <Text>Settings</Text>
        </VStack>
      </SafeAreaView>
    </>
  );
};
