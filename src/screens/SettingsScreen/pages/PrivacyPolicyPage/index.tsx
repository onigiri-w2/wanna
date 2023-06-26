import React from 'react';
import {View} from 'react-native';

import WebView from 'react-native-webview';

import {Header} from '../../components/Header';
import {useSettingsNavigator} from '../../navigations/hooks/useNavigator';

export const PrivacyPolisyPage = () => {
  const {navigateToHome} = useSettingsNavigator();
  const goTo = () => {
    navigateToHome();
  };
  return (
    <View style={{flex: 1}}>
      <Header title="プライバシーポリシー" goTo={goTo} />
      <WebView
        source={{
          uri: 'https://649879e894f5d82ca6ebe4eb--spiffy-cobbler-0ed406.netlify.app/privacypolicy',
        }}
      />
    </View>
  );
};
