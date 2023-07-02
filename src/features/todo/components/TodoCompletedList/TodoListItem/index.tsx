import React from 'react';

import {HStack, Text} from 'native-base';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {TodoSerialized} from '@/domain/model/entity/todo';
import {
  FONT_COLOR_LIGHT,
  FONT_SIZE_NORMAL,
  ICON_SIZE_NORMAL,
} from '@/styles/const';
type Props = {
  todo: TodoSerialized;
};
export const TodoListItem = React.memo(({todo}: Props) => {
  return (
    <HStack alignItems="center" px={4} py={1}>
      <AntDesign name="check" size={ICON_SIZE_NORMAL} color="#999" />
      <Text fontSize={FONT_SIZE_NORMAL} px={4} color={FONT_COLOR_LIGHT}>
        {todo.title}
      </Text>
    </HStack>
  );
});
