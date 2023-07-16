import React from 'react';
import {Linking} from 'react-native';

import {BaseLink} from './base';

const URL = 'https://forms.gle/9XYeMyYNaTgyLnw58';
export const FeatureRequest = () => {
  const handlePress = () => {
    Linking.openURL(URL);
  };
  return <BaseLink text="機能改善・追加のご要望" onPress={handlePress} />;
};
