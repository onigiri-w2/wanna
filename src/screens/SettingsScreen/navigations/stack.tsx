import * as React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Home} from '../pages/Home';
import {InquiryPage} from '../pages/InquiryPage';
import {PrivacyPolisyPage} from '../pages/PrivacyPolicyPage';
import {TermsOfUsePage} from '../pages/TermsOfUsePage';

export type SettingsNavParamList = {
  Inquiry: undefined;
  PrivacyPolicy: undefined;
  TermsOfUse: undefined;
  Usage: undefined;
  Home: undefined;
};
const SettingsStack = createNativeStackNavigator<SettingsNavParamList>();

export const SettingsStacks = () => {
  return (
    <SettingsStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Home">
      <SettingsStack.Screen name="Home" component={Home} />
      <SettingsStack.Screen name="Inquiry" component={InquiryPage} />
      <SettingsStack.Screen
        name="PrivacyPolicy"
        component={PrivacyPolisyPage}
      />
      <SettingsStack.Screen name="TermsOfUse" component={TermsOfUsePage} />
    </SettingsStack.Navigator>
  );
};
