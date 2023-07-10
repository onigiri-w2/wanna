import * as React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {MemoEditor} from '../sub/MemoEditor';
import {MemoHome} from '../sub/MemoHome';

export type MemoPageNavParamList = {
  MemoHome: undefined;
  MemoEditor: undefined;
};
const MemoPageStack = createNativeStackNavigator<MemoPageNavParamList>();

export const MemoPageStacks = () => {
  return (
    <MemoPageStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="MemoHome">
      <MemoPageStack.Screen name="MemoHome" component={MemoHome} />
      <MemoPageStack.Screen name="MemoEditor" component={MemoEditor} />
    </MemoPageStack.Navigator>
  );
};
