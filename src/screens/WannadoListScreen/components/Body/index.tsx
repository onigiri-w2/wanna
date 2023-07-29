import React from 'react';

import {View} from 'native-base';

import {commonStyles} from '@/styles/commonRNStyles';

import {AddEditorShowProvider} from '../../providers/AddEditorShowProvider';
import {Wannadoes} from '../Wannadoes';

export const Body = () => {
  return (
    <View style={commonStyles.flex1}>
      <AddEditorShowProvider>
        <Wannadoes />
      </AddEditorShowProvider>
    </View>
  );
};
