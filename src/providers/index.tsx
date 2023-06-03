import React from 'react';

import {NativeBaseProvider} from 'native-base';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {WannaDoAllProvider} from '@/features/wannado/providers/WannaDoAllProvider';
import {RealmContext} from '@/storage/realm/context';
import {theme} from '@/styles/theme';

type Props = {
  children: React.ReactNode;
};

export const AppProvider = ({children}: Props) => {
  return (
    <RealmContext.RealmProvider>
      <SafeAreaProvider>
        <NativeBaseProvider theme={theme}>
          <WannaDoAllProvider>{children}</WannaDoAllProvider>
        </NativeBaseProvider>
      </SafeAreaProvider>
    </RealmContext.RealmProvider>
  );
};
