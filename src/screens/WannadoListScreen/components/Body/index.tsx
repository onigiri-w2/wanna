import React from 'react';

import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {View} from 'native-base';

import {commonStyles} from '@/styles/commonRNStyles';

import {Wannadoes} from '../Wannadoes';
import {Wannadones} from '../Wannadones';

export const Body = () => {
  return (
    <View style={commonStyles.flex1}>
      <BottomSheetModalProvider>
        <Wannadoes />
        <Wannadones />
      </BottomSheetModalProvider>
    </View>
  );
};
