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
import {createWannado} from '@/domain/usecase/wannado';
import {useEmoji} from '@/hooks/useEmoji';
import {useModal} from '@/hooks/useModal';
import {
  ADD_FORM_HEIGHT,
  ADD_FORM_PADDING,
  BORDER_RADIUS,
  MAIN_COLOR,
  MAIN_COLOR_VERY_LIGHT,
} from '@/styles/const';

type Props = {
  onSubmit?: () => void;
};
export const AddWannadoForm = ({onSubmit}: Props) => {
  const {emoji, updateEmoji} = useEmoji();
  const {isModalVisible, hideModal, showModal} = useModal();
  const [title, setTitle] = React.useState('');

  const handlePressAdd = () => {
    createWannado(title, emoji);
    onSubmit?.();
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
          <EmojiIcon onPress={showModal} emoji={emoji} size={28} />
        </Box>
        <Box flex={1} mr={4}>
          <Input
            bg="white"
            value={title}
            onChange={handleChange}
            borderRadius={BORDER_RADIUS}
            h={`${ADD_FORM_HEIGHT}px`}
            fontSize={16}
            _focus={styles.inputFocused}
          />
        </Box>
        <MainButton onPress={handlePressAdd} text="追加" disabled={!title} />
      </Flex>
      <EmojiModal
        isModalVisible={isModalVisible}
        onPressEmoji={updateEmoji}
        onPressOutside={hideModal}
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
