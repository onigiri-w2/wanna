import React from 'react';
import {Linking} from 'react-native';

import {BaseLink} from './base';

const URL =
  'https://649879e894f5d82ca6ebe4eb--spiffy-cobbler-0ed406.netlify.app/termsofuse';
export const TermsOfUse = () => {
  const handlePress = () => {
    Linking.openURL(URL);
  };

  return <BaseLink text="利用規約" onPress={handlePress} />;
};
