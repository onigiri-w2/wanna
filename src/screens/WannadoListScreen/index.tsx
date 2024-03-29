import React from 'react';

import {VStack} from 'native-base';

import {SafeAreaView} from '@/components/SafeAreaView';
import {commonStyles} from '@/styles/commonRNStyles';
import {BACKGROUND_GRAY_COLOR, MAIN_COLOR} from '@/styles/const';

import {Body} from './components/Body';
import {Header} from './components/Header';

export const WannadoListScreen = () => {
  return (
    <>
      <SafeAreaView
        topColorCode={MAIN_COLOR}
        bottomColorCode={BACKGROUND_GRAY_COLOR}>
        <VStack style={commonStyles.flex1}>
          <Header />
          <Body />
        </VStack>
      </SafeAreaView>
    </>
  );
};
