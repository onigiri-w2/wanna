import React from 'react';
import {TouchableOpacity} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

import {PAGE_HEADER_ICON_SIZE} from '@/styles/const';

import {useSettingIcon} from './hooks';

export const SettingsIcon = () => {
  const {handlePress: handlePressSetting} = useSettingIcon();
  return (
    <TouchableOpacity onPress={handlePressSetting}>
      <Ionicons
        name="ios-settings-sharp"
        size={PAGE_HEADER_ICON_SIZE}
        color="black"
      />
    </TouchableOpacity>
  );
};
