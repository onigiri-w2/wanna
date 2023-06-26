import React from 'react';

import {useSettingsNavigator} from '../../navigations/hooks/useNavigator';

import {BaseLink} from './base';

export const TermsOfUse = () => {
  const {navigateToTermsOfUse} = useSettingsNavigator();

  return <BaseLink text="利用規約" onPress={navigateToTermsOfUse} />;
};
