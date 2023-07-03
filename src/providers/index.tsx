import React, {Suspense} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {NativeBaseProvider} from 'native-base';
import {ErrorBoundary} from 'react-error-boundary';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {RecoilRoot} from 'recoil';
import RecoilNexus from 'recoil-nexus';

import {RootErrorFallback} from '@/components/error/RootErrorFallback';
import {RootSuspenseFallback} from '@/components/suspense/RootSuspenseFallback';
import {commonStyles} from '@/styles/commonRNStyles';
import {theme} from '@/styles/theme';

type Props = {
  children: React.ReactNode;
};

export const AppProvider = ({children}: Props) => {
  return (
    <RecoilRoot>
      <RecoilNexus />
      <NativeBaseProvider theme={theme}>
        <ErrorBoundary FallbackComponent={RootErrorFallback}>
          <Suspense fallback={<RootSuspenseFallback />}>
            <SafeAreaProvider>
              <NavigationContainer>
                <GestureHandlerRootView style={commonStyles.flex1}>
                  {children}
                </GestureHandlerRootView>
              </NavigationContainer>
            </SafeAreaProvider>
          </Suspense>
        </ErrorBoundary>
      </NativeBaseProvider>
    </RecoilRoot>
  );
};
