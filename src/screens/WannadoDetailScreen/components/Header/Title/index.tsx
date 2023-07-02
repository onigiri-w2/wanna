import React from 'react';
import {TouchableOpacity} from 'react-native';

import {Text} from 'native-base';

import {PAGE_HEADER_FONT_SIZE, PAGE_HEADER_FONT_WEIGHT} from '@/styles/const';

type Props = {
  title: string;
  onPress: () => void;
};
export const Title = ({title, onPress}: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flex: 1,
      }}
      activeOpacity={1}>
      <Text
        ml="16px"
        mr="auto"
        pr={3}
        fontSize={PAGE_HEADER_FONT_SIZE}
        fontWeight={PAGE_HEADER_FONT_WEIGHT}
        numberOfLines={1}
        ellipsizeMode="tail">
        {title}
      </Text>
    </TouchableOpacity>
  );
};
