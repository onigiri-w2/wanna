import React from 'react';

import {VStack} from 'native-base';

import {SafeAreaView} from '@/components/SafeAreaView';
import {commonStyles} from '@/styles/commonRNStyles';
import {BACKGROUND_GRAY_COLOR, MAIN_COLOR} from '@/styles/const';

import {Header} from './components/Header';
import {Wannadones} from './components/Wannadones';

export const WannadoCompletedListScreen = () => {
  return (
    <>
      <SafeAreaView
        topColorCode={MAIN_COLOR}
        bottomColorCode={BACKGROUND_GRAY_COLOR}>
        <VStack style={commonStyles.flex1}>
          <Header />
          <Wannadones />
        </VStack>
      </SafeAreaView>
    </>
  );
};
