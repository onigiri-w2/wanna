import React from 'react';

import {useSettingsNavigator} from '../../navigations/hooks/useNavigator';

import {BaseLink} from './base';

export const Inquiry = () => {
  const {navigateToInquiry} = useSettingsNavigator();
  return <BaseLink text="お問い合わせ" onPress={navigateToInquiry} />;
};
