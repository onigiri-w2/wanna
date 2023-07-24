import React from 'react';

import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {View} from 'native-base';

import {commonStyles} from '@/styles/commonRNStyles';

import {AddEditorShowProvider} from '../../providers/AddEditorShowProvider';
import {Buttons} from '../Buttons';
import {Wannadoes} from '../Wannadoes';
import {Wannadones} from '../Wannadones';

export const Body = () => {
  return (
    <View style={commonStyles.flex1}>
      <AddEditorShowProvider>
        <BottomSheetModalProvider>
          <Wannadoes />
          <Wannadones />
          <Buttons />
        </BottomSheetModalProvider>
      </AddEditorShowProvider>
    </View>
  );
};
