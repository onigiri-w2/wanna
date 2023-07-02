import React from 'react';
import {TouchableOpacity, TextInput, StyleSheet} from 'react-native';

import {Text, Box, Flex} from 'native-base';

import {EmojiModal} from '@/components/EmojiModal';
import {useShow} from '@/hooks/useShow';
import {
  BORDER_RADIUS,
  ACCENT_COLOR_VERY_LIGHT,
  FONT_SIZE_LARGE,
} from '@/styles/const';

import {useInput, useEmoji} from './hooks';

type Props = {
  wannadoId: string;
  initialTitle: string;
  initialEmoji: string;
};

export const UpdateWannadoForm = ({
  wannadoId,
  initialTitle,
  initialEmoji,
}: Props) => {
  const {title, handleInputChange} = useInput(initialTitle, wannadoId);
  const {emoji, handleChangeEmoji} = useEmoji(initialEmoji, wannadoId);
  const {isShow, show, hide} = useShow();

  return (
    <Box justifyContent="center">
      <Flex direction="row" alignItems="flex-start">
        <Box
          px={1}
          mr={3}
          bg={ACCENT_COLOR_VERY_LIGHT}
          borderRadius={BORDER_RADIUS}>
          <TouchableOpacity onPress={show}>
            <Text fontSize={24}>{emoji}</Text>
          </TouchableOpacity>
        </Box>
        <Box flex={1}>
          <TextInput
            value={title}
            onChange={handleInputChange}
            numberOfLines={1}
            multiline
            blurOnSubmit
            style={styles.input}
          />
        </Box>
      </Flex>
      <EmojiModal
        isModalVisible={isShow}
        onPressEmoji={handleChangeEmoji}
        onPressOutside={hide}
      />
    </Box>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: ACCENT_COLOR_VERY_LIGHT,
    borderRadius: BORDER_RADIUS,
    paddingHorizontal: 8,
    fontSize: FONT_SIZE_LARGE,
    textAlignVertical: 'auto',
    paddingTop: 6,
    paddingBottom: 6,
  },
});
