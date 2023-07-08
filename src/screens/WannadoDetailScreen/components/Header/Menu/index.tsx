import React from 'react';
import {TouchableOpacity} from 'react-native';

import {Box} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';

type Props = {
  onPress: () => void;
};
export const Menu = ({onPress}: Props) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Box py="4px" px="12px">
        <Ionicons name="md-menu-outline" size={32} color="black" />
      </Box>
    </TouchableOpacity>
  );
};
