import React from 'react';
import {View} from 'react-native';

import {WebView} from 'react-native-webview';

import {Header} from '../../components/Header';
import {useSettingsNavigator} from '../../navigations/hooks/useNavigator';

export const InquiryPage = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const {navigateToHome} = useSettingsNavigator();
  const goTo = () => {
    navigateToHome();
  };
  return (
    <View style={{flex: 1}}>
      <Header title="問い合わせ" goTo={goTo} />
      <WebView
        onLoad={() => setIsLoading(false)}
        source={{
          uri: 'https://docs.google.com/forms/d/e/1FAIpQLScGvb5g8jrnEmfmEavRvrIrj_GRu5ikGdW-nWH6jCYWKgJv6A/viewform?usp=sf_link',
        }}
      />
    </View>
  );
};
