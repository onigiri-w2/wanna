import React, {Suspense} from 'react';
import {Text, View} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {NativeBaseProvider} from 'native-base';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {RecoilRoot} from 'recoil';
import RecoilNexus from 'recoil-nexus';

import {theme} from '@/styles/theme';

type Props = {
  children: React.ReactNode;
};

export const AppProvider = ({children}: Props) => {
  return (
    <RecoilRoot>
      <RecoilNexus />
      <Suspense
        fallback={
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text>loading...</Text>
          </View>
        }>
        <SafeAreaProvider>
          <NativeBaseProvider theme={theme}>
            <NavigationContainer>{children}</NavigationContainer>
          </NativeBaseProvider>
        </SafeAreaProvider>
      </Suspense>
    </RecoilRoot>
  );
};
