import React from 'react';

import {HStack, Text} from 'native-base';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {TodoSerialized} from '@/domain/model/entity/todo';
type Props = {
  todo: TodoSerialized;
};
export const TodoListItem = React.memo(({todo}: Props) => {
  return (
    <HStack alignItems="center" px={4} py={1}>
      <AntDesign name="check" size={20} color="#999" />
      <Text fontSize={16} px={4} color="#555">
        {todo.title}
      </Text>
    </HStack>
  );
});
