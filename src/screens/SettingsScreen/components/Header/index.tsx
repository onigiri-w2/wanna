import React from 'react';
import {TouchableOpacity} from 'react-native';

import {Text, Box} from 'native-base';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

import {useRootNavigator} from '@/navigations/hooks/useNavigator';
import {
  PAGE_HEADER_FONT_SIZE,
  PAGE_HEADER_FONT_WEIGHT,
  PAGE_HEADER_COLOR,
  PAGE_HEADER_HEIGHT,
  PAGE_HEADER_PADDING,
} from '@/styles/const';

const HEADER_TITLE = '設定';
export const Header = () => {
  const {navigateToWannadoList} = useRootNavigator();
  const handlePressBack = () => {
    navigateToWannadoList();
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
        fontSize={PAGE_HEADER_FONT_SIZE}
        fontWeight={PAGE_HEADER_FONT_WEIGHT}
        numberOfLines={1}
        ellipsizeMode="tail">
        {HEADER_TITLE}
      </Text>
      <Box size="20px" />
    </Box>
  );
};
