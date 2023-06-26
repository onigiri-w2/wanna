import React from 'react';
import {TouchableOpacity} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

type Props = {
  onPress: () => void;
};
export const Menu = ({onPress}: Props) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Ionicons name="md-menu-outline" size={32} color="black" />
    </TouchableOpacity>
  );
};
