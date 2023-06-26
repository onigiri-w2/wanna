import React from 'react';
import {TouchableOpacity} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

import {useRootNavigator} from '@/navigations/hooks/useNavigator';
import {PAGE_HEADER_ICON_SIZE} from '@/styles/const';

export const SettingsIcon = () => {
  const {navigateToSettings} = useRootNavigator();

  return (
    <TouchableOpacity onPress={navigateToSettings}>
      <Ionicons
        name="md-settings-sharp"
        size={PAGE_HEADER_ICON_SIZE}
        color="black"
      />
    </TouchableOpacity>
  );
};
