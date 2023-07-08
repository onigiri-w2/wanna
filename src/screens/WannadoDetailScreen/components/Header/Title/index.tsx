import React from 'react';
import {TouchableOpacity} from 'react-native';

import {Text} from 'native-base';

import {commonStyles} from '@/styles/commonRNStyles';
import {PAGE_HEADER_FONT_SIZE, PAGE_HEADER_FONT_WEIGHT} from '@/styles/const';

type Props = {
  title: string;
  onPress: () => void;
};
export const Title = ({title, onPress}: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={commonStyles.flex1}
      activeOpacity={1}>
      <Text
        ml={2}
        mr="auto"
        pr={2}
        py={2}
        fontSize={PAGE_HEADER_FONT_SIZE}
        fontWeight={PAGE_HEADER_FONT_WEIGHT}
        numberOfLines={1}
        ellipsizeMode="tail">
        {title}
      </Text>
    </TouchableOpacity>
  );
};
