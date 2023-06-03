import React from 'react';
import {TouchableOpacity} from 'react-native';

import Entypo from 'react-native-vector-icons/Entypo';
import {Box} from 'native-base';

import {MAIN_COLOR} from '@/styles/const';

type Props = {
  onPress: () => void;
};

export const AddIcon = ({onPress}: Props) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Box
        bg={MAIN_COLOR}
        borderRadius={100}
        w="60px"
        h="60px"
        justifyContent="center"
        alignItems="center">
        <Entypo name="plus" size={48} color="white" />
      </Box>
    </TouchableOpacity>
  );
};
