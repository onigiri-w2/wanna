import React from 'react';
import {TouchableOpacity} from 'react-native';

import {Text, HStack} from 'native-base';

import {WannadoOverview} from '@/domain/types';
import {FONT_SIZE_NORMAL} from '@/styles/const';

type Props = {
  onPress: (wannado: WannadoOverview) => void;
  wannado: WannadoOverview;
};
export const WannadoListItem = ({onPress, wannado}: Props) => {
  const handlePress = () => {
    onPress(wannado);
  };
  return (
    <TouchableOpacity onPress={handlePress}>
      <HStack alignItems="center" px={2} py={3}>
        <Text fontSize={20} ml="4px">
          {wannado.emoji}
        </Text>
        <Text flex={1} fontSize={FONT_SIZE_NORMAL} ml={2} px={2}>
          {wannado.title}
        </Text>
      </HStack>
    </TouchableOpacity>
  );
};
