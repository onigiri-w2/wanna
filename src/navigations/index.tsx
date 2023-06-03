import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Wannado} from '@/domain/entity/wannado';
import {SettingsPage} from '@/screens/SettingsPage';
import {WannaDoDetailPage} from '@/screens/WannaDoDetailPage';
import {WannaDoListPage} from '@/screens/WannaDoListPage';

export type RootNavParamList = {
  WannaDoListPage: undefined;
  WannaDoDetailPage: {wannado: Wannado};
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
        initialRouteName="WannaDoListPage">
        <RootStack.Screen name="WannaDoListPage" component={WannaDoListPage} />
        <RootStack.Screen
          name="WannaDoDetailPage"
          component={WannaDoDetailPage}
        />
        <RootStack.Screen name="SettingsPage" component={SettingsPage} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
