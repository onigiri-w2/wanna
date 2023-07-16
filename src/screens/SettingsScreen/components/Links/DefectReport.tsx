import React from 'react';
import {Linking, Platform} from 'react-native';

import {BaseLink} from './base';

export const DefectReport = () => {
  const url =
    Platform.OS === 'ios'
      ? 'https://forms.gle/roBUPz65ULhqmtnF8'
      : 'https://forms.gle/7vzLEXzpWGMTNvGG7';

  const handlePress = () => {
    Linking.openURL(url);
  };
  return <BaseLink text="不具合報告" onPress={handlePress} />;
};
