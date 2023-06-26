import React from 'react';
import {TouchableOpacity} from 'react-native';

import {Text, Box} from 'native-base';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

import {
  FONT_SIZE_PAGE_HEADER,
  FONT_WEIGHT_PAGE_HEADER,
  PAGE_HEADER_COLOR,
  PAGE_HEADER_HEIGHT,
  PAGE_HEADER_PADDING,
} from '@/styles/const';

type Props = {
  title: string;
  goTo: () => void;
};
export const Header = ({title, goTo}: Props) => {
  const handlePressBack = () => {
    goTo();
  };
  return (
    <Box
      flexDirection="row"
      h={`${PAGE_HEADER_HEIGHT}px`}
      px={`${PAGE_HEADER_PADDING}px`}
      justifyContent="center"
      alignItems="center"
      bg={PAGE_HEADER_COLOR}>
      <TouchableOpacity onPress={handlePressBack}>
        <SimpleLineIcons name="arrow-left" size={20} color="black" />
      </TouchableOpacity>
      <Text
        mx="auto"
        fontSize={FONT_SIZE_PAGE_HEADER}
        fontWeight={FONT_WEIGHT_PAGE_HEADER}
        numberOfLines={1}
        ellipsizeMode="tail">
        {title}
      </Text>
      <Box size="20px" />
    </Box>
  );
};
