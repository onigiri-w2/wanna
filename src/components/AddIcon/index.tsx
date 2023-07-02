import React from 'react';
import {TouchableOpacity} from 'react-native';

import {Box} from 'native-base';
import Entypo from 'react-native-vector-icons/Entypo';

import {BORDER_CIRCLE_RADIUS, MAIN_COLOR} from '@/styles/const';

type Props = {
  onPress: () => void;
};

export const AddIcon = ({onPress}: Props) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Box
        bg={MAIN_COLOR}
        borderRadius={BORDER_CIRCLE_RADIUS}
        w="60px"
        h="60px"
        justifyContent="center"
        alignItems="center">
        <Entypo name="plus" size={48} color="white" />
      </Box>
    </TouchableOpacity>
  );
};
