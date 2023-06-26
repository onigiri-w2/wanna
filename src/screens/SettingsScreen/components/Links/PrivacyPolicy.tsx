import React from 'react';

import {useSettingsNavigator} from '../../navigations/hooks/useNavigator';

import {BaseLink} from './base';

export const PrivacyPolicy = () => {
  const {navigateToPrivacyPolicy} = useSettingsNavigator();
  return (
    <BaseLink text="プライバシーポリシー" onPress={navigateToPrivacyPolicy} />
  );
};
