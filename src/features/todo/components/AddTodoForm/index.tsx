import React from 'react';
import {StyleSheet} from 'react-native';

import {Box, Flex, Input} from 'native-base';

import {MainButton} from '@/components/MainButton';
import {activeWannadoActions} from '@/recoil/states/activeWannado';
import {
  ADD_FORM_PADDING,
  BORDER_RADIUS,
  ADD_FORM_HEIGHT,
  MAIN_COLOR_VERY_LIGHT,
  MAIN_COLOR,
  FONT_SIZE_NORMAL,
} from '@/styles/const';

import {useTextInput} from './hooks';

export const AddTodoForm = React.memo(() => {
  const {value: title, updateValue: updateTitle} = useTextInput();

  const handlePress = async () => {
    updateTitle('');
    if (title === '') return;
    activeWannadoActions.addTodo(title);
  };

  return (
    <Box p={`${ADD_FORM_PADDING}px`} justifyContent="center">
      <Flex direction="row" alignItems="center">
        <Box flex={1} bg="white" mr={4}>
          <Input
            value={title}
            onChange={e => updateTitle(e.nativeEvent.text)}
            borderRadius={BORDER_RADIUS}
            h={`${ADD_FORM_HEIGHT}px`}
            fontSize={FONT_SIZE_NORMAL}
            _focus={styles.focusedInput}
            autoFocus
          />
        </Box>
        <MainButton onPress={handlePress} text="保存" disabled={!title} />
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
