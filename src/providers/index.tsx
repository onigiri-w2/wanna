import React from 'react';

import {NativeBaseProvider} from 'native-base';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {WannadoMemoryRepository} from '@/domain/repository/wannado';
import {theme} from '@/styles/theme';

import {WannadoRepositoryProvider} from './repository';
import {WannadoAllProvider} from './wannadoAll';

type Props = {
  children: React.ReactNode;
};

export const AppProvider = ({children}: Props) => {
  return (
    <WannadoRepositoryProvider value={new WannadoMemoryRepository()}>
      <WannadoAllProvider>
        <SafeAreaProvider>
          <NativeBaseProvider theme={theme}>{children}</NativeBaseProvider>
        </SafeAreaProvider>
      </WannadoAllProvider>
    </WannadoRepositoryProvider>
  );
};
