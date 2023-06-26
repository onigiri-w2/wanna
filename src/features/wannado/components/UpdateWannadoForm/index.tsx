import React from 'react';
import {TouchableOpacity, TextInput} from 'react-native';

import {Text, Box, Flex} from 'native-base';

import {EmojiModal} from '@/components/EmojiModal';
import {useModal} from '@/hooks/useModal';
import {BORDER_RADIUS, ACCENT_COLOR_VERY_LIGHT} from '@/styles/const';

import {useInput, useEmoji} from './hooks';

type Props = {
  wannadoId: string;
  initialTitle: string;
  initialEmoji: string;
  onChangeTitle?: (title: string) => void;
  onChangeEmoji?: (emoji: string) => void;
};

export const UpdateWannadoForm = ({
  wannadoId,
  initialTitle,
  initialEmoji,
  onChangeTitle,
  onChangeEmoji,
}: Props) => {
  const {title, handleInputChange} = useInput(
    initialTitle,
    wannadoId,
    onChangeTitle,
  );
  const {emoji, handleChangeEmoji} = useEmoji(
    initialEmoji,
    wannadoId,
    onChangeEmoji,
  );
  const {isModalVisible, showModal, hideModal} = useModal();

  return (
    <Box justifyContent="center">
      <Flex direction="row" alignItems="flex-start">
        <Box
          px={1}
          mr={3}
          bg={ACCENT_COLOR_VERY_LIGHT}
          borderRadius={BORDER_RADIUS}>
          <TouchableOpacity onPress={showModal}>
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
            style={{
              backgroundColor: ACCENT_COLOR_VERY_LIGHT,
              borderRadius: BORDER_RADIUS,
              paddingHorizontal: 8,
              fontSize: 20,
              textAlignVertical: 'auto',
              paddingTop: 6,
              paddingBottom: 6,
            }}
          />
        </Box>
      </Flex>
      <EmojiModal
        isModalVisible={isModalVisible}
        onPressEmoji={handleChangeEmoji}
        onPressOutside={hideModal}
      />
    </Box>
  );
};
