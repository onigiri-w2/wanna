import React from 'react';

import {VStack} from 'native-base';

import {SafeAreaView} from '@/components/SafeAreaView';
import {commonStyles} from '@/styles/commonStyles';
import {BACKGROUND_GRAY_COLOR, MAIN_COLOR} from '@/styles/const';

import {Body} from './components/Body';
import {Header} from './components/Header';
import {WannadoneModalProvider} from './providers/WannadoneModalProvider';

export const WannadoListScreen = () => {
  return (
    <SafeAreaView
      topColorCode={MAIN_COLOR}
      bottomColorCode={BACKGROUND_GRAY_COLOR}>
      <WannadoneModalProvider>
        <VStack style={commonStyles.flex1}>
          <Header />
          <Body />
        </VStack>
      </WannadoneModalProvider>
    </SafeAreaView>
  );
};
