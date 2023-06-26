import React from 'react';

import {Box} from 'native-base';

import {TodoSerialized} from '@/domain/model/entity/todo';
import {BORDER_RADIUS} from '@/styles/const';

import {TodoListItem} from './TodoListItem';

type Props = {
  todoList: TodoSerialized[];
};

export const TodoCompletedList = ({todoList}: Props) => {
  return (
    <Box borderRadius={BORDER_RADIUS}>
      {todoList
        .filter(todo => todo.isCompleted)
        .map(todo => (
          <TodoListItem key={todo.id} todo={todo} />
        ))}
    </Box>
  );
};
