import React from 'react';
import {TouchableOpacity} from 'react-native';

import {Box, Text} from 'native-base';
import Entypo from 'react-native-vector-icons/Entypo';

import {BORDER_GRAY_COLOR} from '@/styles/const';

type Props = {
  text: string;
  onPress: () => void;
};
export const BaseLink = ({text, onPress}: Props) => {
  return (
    <TouchableOpacity
      style={{
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderBottomColor: BORDER_GRAY_COLOR,
        borderBottomWidth: 1,
      }}
      onPress={onPress}>
      <Box flexDirection="row" alignItems="center">
        <Text flex={1} fontSize={16}>
          {text}
        </Text>
        <Entypo name="chevron-thin-right" size={16} color="#777" />
      </Box>
    </TouchableOpacity>
  );
};
