import React from 'react';

import {Box, Flex, Input} from 'native-base';

import {MainButton} from '@/components/MainButton';
import {TodoSerialized} from '@/domain/model/entity/todo';
import {updateTodoTitle} from '@/domain/usecase/todo';
import {
  ADD_FORM_PADDING,
  BORDER_RADIUS,
  ADD_FORM_HEIGHT,
  MAIN_COLOR_VERY_LIGHT,
  MAIN_COLOR,
} from '@/styles/const';

import {useTextInput} from './hooks';

type Props = {
  onUpdateTitle: (todoId: string, title: string) => void;
  todo: TodoSerialized;
  wannadoId: string;
};
export const UpdateTodoForm = React.memo(
  ({onUpdateTitle, todo, wannadoId}: Props) => {
    const {value, handleChangeText} = useTextInput(todo.title);
    const handlePress = () => {
      updateTodoTitle(wannadoId, todo.id, value);
      onUpdateTitle(todo.id, value);
    };

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
              _focus={{
                backgroundColor: MAIN_COLOR_VERY_LIGHT,
                borderColor: MAIN_COLOR,
              }}
            />
          </Box>
          <MainButton onPress={handlePress} h={ADD_FORM_HEIGHT} text="保存" />
        </Flex>
      </Box>
    );
  },
);
