import React from 'react';
import {TouchableOpacity} from 'react-native';

import {Text} from 'native-base';

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
      <Text flex={1} fontSize={FONT_SIZE_NORMAL} ml={2} px={2} py={3}>
        {wannado.title}
      </Text>
    </TouchableOpacity>
  );
};
