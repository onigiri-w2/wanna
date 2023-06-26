import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

import {Text} from 'native-base';

import {BORDER_RADIUS, MAIN_COLOR, MAIN_COLOR_VERY_LIGHT} from '@/styles/const';

type Props = {
  onPress: () => void;
  text: string;
  disabled?: boolean;
  py?: number;
  px?: number;
};
export const MainButton = ({
  onPress,
  text,
  disabled = false,
  py = 2,
  px = 4,
}: Props) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[styles.button, disabled && styles.disabled]}>
      <Text
        py={py}
        px={px}
        textAlign="center"
        color={disabled ? 'gray.400' : 'black'}
        fontWeight="bold"
        fontSize={16}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: MAIN_COLOR,
    justifyContent: 'center', // テキストを縦中央に配置するために追加
    alignItems: 'center', // テキストを横中央に配置するために追加
    borderRadius: BORDER_RADIUS,
  },
  disabled: {
    backgroundColor: MAIN_COLOR_VERY_LIGHT,
  },
});
