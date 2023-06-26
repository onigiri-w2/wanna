import React, {useCallback} from 'react';

import {Box} from 'native-base';

import {TodoSerialized} from '@/domain/model/entity/todo';
import {BORDER_RADIUS} from '@/styles/const';

import {TodoListItem} from './TodoListItem';

type Props = {
  todoList: TodoSerialized[];
  onChangeComplete: (todoId: string, complete: boolean) => void;
  onPressTodo: (todo: TodoSerialized) => void;
  onPressDelete: (todo: TodoSerialized) => void;
};

export const TodoUncompletedList = ({
  todoList,
  onChangeComplete,
  onPressTodo,
  onPressDelete,
}: Props) => {
  const onPressCheckbox = useCallback(
    (complete: boolean, todo: TodoSerialized) => {
      onChangeComplete(todo.id, complete);
    },
    [],
  );
  const handlePressTodo = useCallback((todo: TodoSerialized) => {
    onPressTodo(todo);
  }, []);
  const onPressLongTodo = useCallback((todo: TodoSerialized) => {}, []);
  const handlePressDelete = useCallback((todo: TodoSerialized) => {
    onPressDelete(todo);
  }, []);

  return (
    <Box borderRadius={BORDER_RADIUS} bg="white">
      {todoList
        .filter(todo => !todo.isCompleted)
        .map(todo => (
          <TodoListItem
            key={todo.id}
            todo={todo}
            onPressCheckbox={onPressCheckbox}
            onPressTodo={handlePressTodo}
            onLongPressTodo={onPressLongTodo}
            onPressDelete={handlePressDelete}
          />
        ))}
    </Box>
  );
};
