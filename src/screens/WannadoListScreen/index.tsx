import React from 'react';
import {StyleSheet} from 'react-native';

import {VStack} from 'native-base';
import SafeAreaView from 'react-native-safe-area-view';

import {commonStyles} from '@/styles/commonStyles';
import {MAIN_COLOR, BACKGROUND_GRAY_COLOR} from '@/styles/const';

import {Body} from './components/Body';
import {Header} from './components/Header';
import {WannadoneModalProvider} from './providers/WannadoneModalProvider';

export const WannadoListScreen = () => {
  return (
    <>
      <SafeAreaView style={styles.safe_area} forceInset={{bottom: 'never'}}>
        <WannadoneModalProvider>
          <VStack style={commonStyles.flex1}>
            <Header />
            <Body />
          </VStack>
        </WannadoneModalProvider>
      </SafeAreaView>
      {/* <SafeAreaView style={style.bottom_safe_area} /> */}
    </>
  );
};

export const styles = StyleSheet.create({
  safe_area: {
    backgroundColor: MAIN_COLOR,
    flex: 1,
  },
  bottom_safe_area: {
    backgroundColor: BACKGROUND_GRAY_COLOR,
  },
});
