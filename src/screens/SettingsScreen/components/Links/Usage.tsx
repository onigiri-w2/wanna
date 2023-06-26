import React from 'react';

import {useSettingsNavigator} from '../../navigations/hooks/useNavigator';

import {BaseLink} from './base';

export const Usage = () => {
  const {navigateToUsage} = useSettingsNavigator();
  return <BaseLink text="アプリの使い方" onPress={navigateToUsage} />;
};
