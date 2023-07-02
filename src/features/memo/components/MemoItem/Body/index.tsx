import React from 'react';
import {StyleSheet} from 'react-native';

import {Text} from 'native-base';
import {TouchableOpacity} from 'react-native-gesture-handler';

import {MemoSerialized} from '@/domain/model/entity/memo';
import {
  FONT_COLOR_NORMAL,
  FONT_SIZE_NORMAL,
  FONT_SIZE_SMALL,
} from '@/styles/const';

type BodyProps = {
  memo: MemoSerialized;
  onPressBody: () => void;
  isMemoWide: boolean;
};
export const Body = ({memo, onPressBody, isMemoWide}: BodyProps) => {
  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={onPressBody}
      style={styles.body}>
      <Text
        fontSize={FONT_SIZE_NORMAL}
        mb={2}
        fontWeight="bold"
        color={FONT_COLOR_NORMAL}>
        {memo.title}
      </Text>
      <Text
        fontSize={FONT_SIZE_SMALL}
        fontWeight="normal"
        color={FONT_COLOR_NORMAL}
        numberOfLines={isMemoWide ? undefined : 3}>
        {memo.content}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  body: {
    padding: 16,
  },
});
