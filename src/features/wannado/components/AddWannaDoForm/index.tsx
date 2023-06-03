import React from 'react';
import {TouchableOpacity} from 'react-native';

import {Box, Flex, Input, Text} from 'native-base';
import Icon from 'react-native-vector-icons/Entypo';

import {AddButton} from '@/components/AddButton';
import {EmojiModal} from '@/components/EmojiModal';
import {Wannado} from '@/domain/entity/wannado';
import {useModal} from '@/hooks/useModal';
import {
  ADD_FORM_HEIGHT,
  ADD_FORM_PADDING,
  BORDER_RADIUS,
  MAIN_COLOR,
  MAIN_COLOR_VERY_LIGHT,
} from '@/styles/const';

import {useWannadoAllContext} from '../../providers/WannaDoAllProvider';

import {useEmoji} from './hooks';

export const AddWannaDoForm = () => {
  const {emoji, updateEmoji} = useEmoji();
  const {isModalVisible, hideModal, showModal} = useModal();
  const [value, setValue] = React.useState('');
  const {addWannado} = useWannadoAllContext();

  const handlePressAdd = () => {
    addWannado(Wannado.new(value, emoji));
    setValue('');
  };

  return (
    <Box p={`${ADD_FORM_PADDING}px`} justifyContent="center">
      <Flex direction="row" alignItems="center">
        <Box mr={4}>
          <TouchableOpacity onPress={showModal}>
            {emoji === '' ? (
              <Icon name="emoji-happy" size={28} color="black" />
            ) : (
              <Text fontSize={28}>{emoji}</Text>
            )}
          </TouchableOpacity>
        </Box>
        <Box flex={1} bg="white" mr={4}>
          <Input
            value={value}
            onChange={e => setValue(e.nativeEvent.text)}
            borderRadius={BORDER_RADIUS}
            h={`${ADD_FORM_HEIGHT}px`}
            fontSize={16}
            _focus={{
              backgroundColor: MAIN_COLOR_VERY_LIGHT,
              borderColor: MAIN_COLOR,
            }}
          />
        </Box>
        <AddButton onPress={handlePressAdd} h={ADD_FORM_HEIGHT} />
      </Flex>
      <EmojiModal
        isModalVisible={isModalVisible}
        onPressEmoji={updateEmoji}
        onPressOutside={hideModal}
      />
    </Box>
  );
};
