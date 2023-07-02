import React from 'react';

import {HStack, Text} from 'native-base';

import {
  PAGE_HEADER_FONT_SIZE,
  PAGE_HEADER_FONT_WEIGHT,
  PAGE_HEADER_COLOR,
  PAGE_HEADER_HEIGHT,
  PAGE_HEADER_PADDING,
} from '@/styles/const';

import {useWannadoneModalContext} from '../../providers/WannadoneModalProvider';

import {DoneIcon} from './DoneIcon';
import {SettingsIcon} from './SettingsIcon';

export const Header = () => {
  const {isModalVisible} = useWannadoneModalContext();
  return (
    <HStack
      h={`${PAGE_HEADER_HEIGHT}px`}
      px={`${PAGE_HEADER_PADDING}px`}
      justifyContent="center"
      alignItems="center"
      bg={PAGE_HEADER_COLOR}>
      <DoneIcon />
      <Text
        marginX="auto"
        fontSize={PAGE_HEADER_FONT_SIZE}
        fontWeight={PAGE_HEADER_FONT_WEIGHT}>
        {isModalVisible ? 'やったこと' : 'やりたいこと'}
      </Text>
      <SettingsIcon />
    </HStack>
  );
};
