import React from 'react';
import {
  StyleSheet,
  NativeSyntheticEvent,
  TextInputChangeEventData,
} from 'react-native';

import {Box, Flex, Input} from 'native-base';

import {EmojiIcon} from '@/components/EmojiIcon';
import {EmojiModal} from '@/components/EmojiModal';
import {MainButton} from '@/components/MainButton';
import {useShow} from '@/hooks/useShow';
import {wannadoOverviewAllActions} from '@/recoil/states/wannadoOverview';
import {
  ADD_FORM_HEIGHT,
  ADD_FORM_PADDING,
  BORDER_RADIUS,
  FONT_SIZE_NORMAL,
  MAIN_COLOR,
  MAIN_COLOR_VERY_LIGHT,
} from '@/styles/const';

import {useEmoji} from './hooks';

export const AddWannadoForm = () => {
  const {emoji, updateEmoji} = useEmoji();
  const {isShow, hide, show} = useShow();
  const [title, setTitle] = React.useState('');

  const handlePressAdd = async () => {
    wannadoOverviewAllActions.addWannado(title, emoji);
    setTitle('');
    updateEmoji('');
  };

  const handleChange = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
    setTitle(e.nativeEvent.text);
  };

  return (
    <Box p={`${ADD_FORM_PADDING}px`} justifyContent="center">
      <Flex direction="row" alignItems="center">
        <Box mr={4}>
          <EmojiIcon onPress={show} emoji={emoji} size={28} />
        </Box>
        <Box flex={1} mr={4}>
          <Input
            bg="white"
            value={title}
            onChange={handleChange}
            borderRadius={BORDER_RADIUS}
            h={`${ADD_FORM_HEIGHT}px`}
            fontSize={FONT_SIZE_NORMAL}
            _focus={styles.inputFocused}
          />
        </Box>
        <MainButton onPress={handlePressAdd} text="追加" disabled={!title} />
      </Flex>
      <EmojiModal
        isModalVisible={isShow}
        onPressEmoji={updateEmoji}
        onPressOutside={hide}
      />
    </Box>
  );
};

const styles = StyleSheet.create({
  inputFocused: {
    backgroundColor: MAIN_COLOR_VERY_LIGHT,
    borderColor: MAIN_COLOR,
  },
});
