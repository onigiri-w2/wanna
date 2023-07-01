import React from 'react';
import {StyleSheet} from 'react-native';

import {Box, Flex, Input} from 'native-base';

import {MainButton} from '@/components/MainButton';
import {TodoSerialized} from '@/domain/model/entity/todo';
import {
  ADD_FORM_PADDING,
  BORDER_RADIUS,
  ADD_FORM_HEIGHT,
  MAIN_COLOR_VERY_LIGHT,
  MAIN_COLOR,
} from '@/styles/const';

import {useTextInput} from './hooks';

type Props = {
  todo: TodoSerialized;
  onClose: () => void;
};
export const UpdateTodoForm = React.memo(({todo, onClose}: Props) => {
  const {value, handleChangeText} = useTextInput(todo);

  return (
    <Box p={`${ADD_FORM_PADDING}px`} justifyContent="center">
      <Flex direction="row" alignItems="center">
        <Box flex={1} bg="white" mr={4}>
          <Input
            value={value}
            onChange={handleChangeText}
            borderRadius={BORDER_RADIUS}
            h={`${ADD_FORM_HEIGHT}px`}
            fontSize={16}
            _focus={styles.focusedInput}
            autoFocus
          />
        </Box>
        <MainButton onPress={onClose} text="閉じる" />
      </Flex>
    </Box>
  );
});

const styles = StyleSheet.create({
  focusedInput: {
    backgroundColor: MAIN_COLOR_VERY_LIGHT,
    borderColor: MAIN_COLOR,
  },
});
