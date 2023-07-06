import React from 'react';
import {Linking} from 'react-native';

import {BaseLink} from './base';

const URL =
  'https://docs.google.com/forms/d/e/1FAIpQLScGvb5g8jrnEmfmEavRvrIrj_GRu5ikGdW-nWH6jCYWKgJv6A/viewform?usp=sf_link';
export const Inquiry = () => {
  const handlePress = () => {
    Linking.openURL(URL);
  };
  return <BaseLink text="お問い合わせ" onPress={handlePress} />;
};
