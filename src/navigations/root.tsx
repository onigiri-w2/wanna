import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {SettingsPage} from '@/screens/SettingsScreen';
import {WannadoDetailPage} from '@/screens/WannadoDetailScreen';
import {WannadoListScreen} from '@/screens/WannadoListScreen';

export type RootNavParamList = {
  WannadoListPage: undefined;
  WannadoDetailPage: {wannadoId: string};
  SettingsPage: undefined;
};
const RootStack = createNativeStackNavigator<RootNavParamList>();

export const RootStacks = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="WannadoListPage">
        <RootStack.Screen
          name="WannadoListPage"
          component={WannadoListScreen}
        />
        <RootStack.Screen
          name="WannadoDetailPage"
          component={WannadoDetailPage}
        />
        <RootStack.Screen name="SettingsPage" component={SettingsPage} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
