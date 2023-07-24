import React from 'react';
import {StyleSheet} from 'react-native';

import {Box, Flex, Input} from 'native-base';

import {MainButton} from '@/components/MainButton';
import {TodoSerialized} from '@/domain/model/entity/todo';
import {MAX_TODO_TITLE_LENGTH} from '@/domain/model/entity/todo/valueobject/title';
import {
  ADD_FORM_PADDING,
  BORDER_RADIUS,
  ADD_FORM_HEIGHT,
  MAIN_COLOR_VERY_LIGHT,
  MAIN_COLOR,
  FONT_SIZE_NORMAL,
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
            fontSize={FONT_SIZE_NORMAL}
            blurOnSubmit={false}
            _focus={styles.focusedInput}
            autoFocus
            onSubmitEditing={onClose}
            returnKeyType="done"
            maxLength={MAX_TODO_TITLE_LENGTH}
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
