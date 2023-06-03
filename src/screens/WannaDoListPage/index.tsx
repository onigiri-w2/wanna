import React from 'react';

import {VStack} from 'native-base';
import SafeAreaView from 'react-native-safe-area-view';

import {BACKGROUND_GRAY_COLOR, MAIN_COLOR} from '@/styles/const';

import {Body} from './components/Body';
import {Header} from './components/Header';
import {WannaDoneModalProvider} from './providers';

export const WannaDoListPage = () => {
  return (
    <>
      <SafeAreaView
        style={{
          backgroundColor: MAIN_COLOR,
          flex: 1,
        }}
        forceInset={{bottom: 'never'}}>
        <WannaDoneModalProvider>
          <VStack style={{flex: 1}}>
            <Header />
            <Body />
          </VStack>
        </WannaDoneModalProvider>
      </SafeAreaView>
      <SafeAreaView style={{backgroundColor: BACKGROUND_GRAY_COLOR}} />
    </>
  );
};
