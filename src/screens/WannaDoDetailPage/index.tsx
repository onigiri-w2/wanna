import React from "react";

import { useRoute } from "@react-navigation/native";
import { VStack } from "native-base";
import SafeAreaView from "react-native-safe-area-view";

import { MAIN_COLOR } from "@/styles/const";

import { Header } from "./components/Header";

export const WannaDoDetailPage = () => {
  const route = useRoute();
  console.log(route.params);
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
        </VStack>
      </SafeAreaView>
    </>
  );
};
