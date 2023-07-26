import React from 'react';
import {TouchableOpacity} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

import {useRootNavigator} from '@/navigations/hooks/useNavigator';
import {PAGE_HEADER_ICON_SIZE} from '@/styles/const';

export const DoneIcon = () => {
  const {navigateToWannadoCompletedList} = useRootNavigator();
  const handlePress = () => {
    navigateToWannadoCompletedList();
  };
  return (
    <TouchableOpacity onPress={handlePress}>
      <Ionicons
        name="md-checkmark-done"
        size={PAGE_HEADER_ICON_SIZE}
        color="black"
      />
    </TouchableOpacity>
  );
};
