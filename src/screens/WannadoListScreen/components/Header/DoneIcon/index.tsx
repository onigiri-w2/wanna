import React from 'react';
import {TouchableOpacity} from 'react-native';

import {Box} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {BORDER_RADIUS, PAGE_HEADER_ICON_SIZE} from '@/styles/const';

import {useDoneIcon} from './hooks';

export const DoneIcon = () => {
  const {handlePress: handlePresDone, bgColor, color} = useDoneIcon();
  return (
    <TouchableOpacity activeOpacity={1} onPress={handlePresDone}>
      <Box bg={bgColor} borderRadius={BORDER_RADIUS}>
        <Ionicons
          name="md-checkmark-done"
          size={PAGE_HEADER_ICON_SIZE}
          color={color}
        />
      </Box>
    </TouchableOpacity>
  );
};
