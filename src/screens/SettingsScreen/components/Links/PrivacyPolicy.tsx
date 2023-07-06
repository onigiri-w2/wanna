import React from 'react';
import {Linking} from 'react-native';

import {BaseLink} from './base';

export const URL =
  'https://649879e894f5d82ca6ebe4eb--spiffy-cobbler-0ed406.netlify.app/privacypolicy';
export const PrivacyPolicy = () => {
  const handlePress = () => {
    Linking.openURL(URL);
  };
  return <BaseLink text="プライバシーポリシー" onPress={handlePress} />;
};
