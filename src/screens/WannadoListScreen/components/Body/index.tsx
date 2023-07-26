import React from 'react';

import {View} from 'native-base';

import {commonStyles} from '@/styles/commonRNStyles';

import {AddEditorShowProvider} from '../../providers/AddEditorShowProvider';
import {Buttons} from '../Buttons';
import {Wannadoes} from '../Wannadoes';

export const Body = () => {
  return (
    <View style={commonStyles.flex1}>
      <AddEditorShowProvider>
        <Wannadoes />
        <Buttons />
      </AddEditorShowProvider>
    </View>
  );
};
