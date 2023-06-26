import React from 'react';
import {TouchableOpacity} from 'react-native';

import {Text} from 'native-base';

import {FONT_SIZE_PAGE_HEADER, FONT_WEIGHT_PAGE_HEADER} from '@/styles/const';

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
        fontSize={FONT_SIZE_PAGE_HEADER}
        fontWeight={FONT_WEIGHT_PAGE_HEADER}
        numberOfLines={1}
        ellipsizeMode="tail">
        {title}
      </Text>
    </TouchableOpacity>
  );
};
