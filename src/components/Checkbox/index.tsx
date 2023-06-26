import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';

import {BORDER_CIRCLE_RADIUS} from '@/styles/const';

type Props = {
  checked: boolean;
  onPress: (checked: boolean) => void;
  size?: number;
};
export const Checkbox = ({checked, onPress, size = 20}: Props) => {
  const handlePress = () => {
    onPress(!checked);
  };
  return (
    <TouchableOpacity
      style={[
        styles.checkbox,
        checked && styles.checked,
        {width: size, height: size},
      ]}
      onPress={handlePress}>
      {checked && <AntDesign name="check" size={size} color="#999" />}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  checkbox: {
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: BORDER_CIRCLE_RADIUS,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checked: {
    borderWidth: 0,
  },
});
